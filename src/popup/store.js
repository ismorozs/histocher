import Message from './messages';

const ADD_TAG_SUGGESTION = 'Add tag from existing';

const LISTENERS = [];

const STATE = {
  allExistingTags: [],
  assignedTags: [],
  newTagInput: '',
};

const store = {
  getState,
  addListener,
  addNewTag,
  removeTag,
  saveTagData,
  handleInput,
  getData,
  startSearch,
  openSettings,
  openHelp,
};

export default store;

function getState () {
  return {
    selected: ADD_TAG_SUGGESTION,
    newTagInput: STATE.newTagInput,
    allExistingTags: [{ option: ADD_TAG_SUGGESTION }].concat( STATE.allExistingTags.map((tag) => ({ option: tag })) ),
    assignedTags: STATE.assignedTags.map((tag) => ({ name: tag }))
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

  Message.addNewTag(handledTag).then(saveTagData);
}

function removeTag (tag) {
  Message.removeTag(tag).then(saveTagData);
}

function saveTagData ({ allExistingTags, assignedTags }) {
  STATE.newTagInput = '';

  if (allExistingTags) {
    Object.assign(STATE, { allExistingTags });
  }

  if (assignedTags) {
    Object.assign(STATE, { assignedTags });
  }

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

function openSettings () {
  Message.openSettings();
}

function openHelp () {
  Message.openHelp();
}
