import Couli from 'couli';
import styles from './styles';
import Store from '../../../store';
import createHistoryTag from '../../../../common/ui/components/history-tag/index';
import markup from './markup.html';

const HistoryTag = createHistoryTag(Store);

const INITIAL_POPUP_POSITION = { top: 20, left: 'auto', right: 20 };

export default Couli.define({
  historyTag: [ HistoryTag ]
}, markup, {

  selected: {},

  newTagInput: {
    _eku: (e) => {
      e.stopPropagation();
      if (e.keyCode === 13) {
        Store.addNewTag(e.target.value);
        return;
      }

      Store.handleInput(e.target.value);
    }
  },

  addTagButton: { _emc: () => Store.addNewTag() },

  allExistingTags: {

    _ech: (e, ci) => {
      if (e.target.value) {
        Store.addNewTag(e.target.value);
        ci.set({ selected: e.target.value });
      }
    },

    _a: ($) => ({ value: $.selected }),
  },

  assignedTagsSection: { _c: ($) => ({ hidden: !$.assignedTags.length }) },
  visitedPagesSection: { _c: ($) => ({ hidden: !$.recentlyVisitedPages.length }) },

  recentlyVisitedPages: { listItem: { bindings: {
    url: {},
    icon: {},
    title: {
      html: ($) => $.title || $.url,
      events: { click: (e, ci) => Store.openPage( ci.get('url') ) },
      attrs: ($) => ({ title: $.title + '\n' + $.url }),
      style: ($) => ({ backgroundImage: 'url(' + $.icon + ')' }),
    }
  }}},

  controlsButton: {
    _emc: () => Store.openPage('settings')
  },

  helpButton: {
    _emc: () => Store.openPage('help')
  },

  switchTagsButton: {
    _emc: () => Store.switchTagPanel(),
    _c: ($) => ({
      rightTriangle: !$.tagPanelShown,
      bottomTriangle: $.tagPanelShown
    }),
  },
  tagsPanel: { _c: ($) => ({ hidden: !$.tagPanelShown }) },
  tagPanelShown: {},

  '': {
    _hm: (el, ci) => {
      Store.addListener((store) => ci.set( store.getState() ));
      Store.getData();
    }
  }
}, styles({ INITIAL_POPUP_POSITION }));
