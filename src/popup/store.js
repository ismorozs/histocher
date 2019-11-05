import Message from './messages';

const ADD_TAG_SUGGESTION = 'Add tag from existing';

const LISTENERS = [];

const STATE = {
  allExistingTags: [],
  assignedTags: [],
  recentlyVisitedPages: [],
  newTagInput: '',
  tagPanelShown: false,
};

const store = {
  getState,
  addListener,
  addNewTag,
  removeTag,
  savePageData,
  handleInput,
  getData,
  startSearch,
  openPage,
  switchTagPanel,
};

const SERVER_RETURN_KEYS = ['allExistingTags', 'assignedTags', 'recentlyVisitedPages', 'favIconUrl']

export default store;

function getState () {
  return {
    tagPanelShown: STATE.tagPanelShown,
    selected: ADD_TAG_SUGGESTION,
    newTagInput: STATE.newTagInput,
    allExistingTags: [{ option: ADD_TAG_SUGGESTION }].concat( STATE.allExistingTags.map((tag) => ({ option: tag })) ),
    assignedTags: STATE.assignedTags.map((tag) => ({ name: tag })),
    recentlyVisitedPages: STATE.recentlyVisitedPages.map((page) => ({ title: page.title, url: page.url, icon: STATE.favIconUrl }))
  }
}

function getData () {
  Message.getData();
}

function addListener (fn) {
  LISTENERS.push(fn);
}

function runListeners () {
  LISTENERS.forEach((fn) => fn(store));
  return Promise.resolve();
}

function addNewTag (tag) {
  tag = tag || STATE.newTagInput;
  const handledTag = toCamelCase(tag);

  if (!handledTag) {
    return;
  }

  Message.addNewTag(handledTag).then(savePageData);
}

function removeTag (tag) {
  Message.removeTag(tag).then(savePageData);
}

function savePageData (data) {
  STATE.newTagInput = '';

  SERVER_RETURN_KEYS.forEach((key) => {
    if (typeof data[key] !== 'undefined') {
      STATE[key] = data[key];
    }
  });

  runListeners();
}

function handleInput (str) {
  STATE.newTagInput = str;
  runListeners();
}

function toCamelCase (str) {
  if (!str) {
    return;
  }

  const words = str.split(' ');

  if (words.length === 1) {
    return str;
  }

  return words.map((word) => word.trim())
    .map((word, i) => {
      const firstLetter = i ? word[0].toUpperCase() : word[0];
      return firstLetter + word.slice(1)
    }).join('');
}

function startSearch (query) {
  Message.startSearch(query);
}

function openPage (url) {
  Message.openPage(url);
}

function switchTagPanel () {
  STATE.tagPanelShown = !STATE.tagPanelShown;
  runListeners();
}
