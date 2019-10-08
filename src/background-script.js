const browser = require('webextension-polyfill');

import { onMessage } from './common/interaction';
import { SUGGESTIONS } from './common/constants';
import reactions from './background/reactions';
import Message from './background/messages';
import State from './background/state';

const FAVICON_SAVE_KEY = 'favicon';

window.__IS_BACKGROUND_SCRIPT__ = true;

browser.omnibox.setDefaultSuggestion({ description: SUGGESTIONS.PREFIX + SUGGESTIONS.DEFAULT });
browser.omnibox.onInputEntered.addListener(onInputEntered);
browser.omnibox.onInputChanged.addListener(onInputChanged);
browser.runtime.onMessage.addListener((message) => onMessage(message, reactions));
browser.storage.onChanged.addListener(State.onSettingsChange);
browser.tabs.onActivated.addListener(onTabActivated);
browser.tabs.onRemoved.addListener(onTabRemoved);
browser.tabs.onUpdated.addListener(onFaviconUpdated);

State.loadSettings();

function onFaviconUpdated (tabId, changedInfo, tab) {
  const origin = tab.url.split('/').slice(0, 3).join('/')
  browser.storage.local.set({ [origin + FAVICON_SAVE_KEY]: changedInfo.favIconUrl });
}

function onTabActivated ({ tabId }) {
  if (State.getTabState(tabId)) {
    Message.sendTagData({ tabId });
  }
}

function onTabRemoved (tabId) {
  if (State.getTabState(tabId)) {
    State.removeTabState(tabId);
  }
}

function onInputChanged (query, addSuggestions) {
  addSuggestions([
    { description: SUGGESTIONS.PREFIX + SUGGESTIONS.SETTINGS, content: SUGGESTIONS.SETTINGS },
    { description: SUGGESTIONS.PREFIX + SUGGESTIONS.HELP, content: SUGGESTIONS.HELP },
  ]);
}

function onInputEntered (query) {
  switch (query) {
    case SUGGESTIONS.SETTINGS:
      reactions.openSettings();
      break;

    case SUGGESTIONS.HELP:
      reactions.openHelp();
      break;

    default:
      reactions.startSearch({ query });
  }
}
