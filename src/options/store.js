const browser = require('webextension-polyfill');

import { SETTINGS } from '../background/state';
import Message from './messages';

const LISTENERS = [];

const STATE = {
  tabId: null,
  allExistingTags: [],
  PAGE_SIZE: 0,
  color: '',
  colorSchemes: [],
  savedSearches: {},
};

const store = {
  getState,
  saveSettings,
  resetToDefaults,
  updateForm,
  loadData,
  addListener,
  runListeners,
  removeTag,
  saveData,
  startSearch,
  removeSearch,
  getSavedSearches,
};

export default store;

const FIELDS = {
  PAGE_SIZE: { validate: (val) => +val },
  VISITED_PAGES_LENGTH: { validate: (val) => +val > -1 },
  COLOR: { validate: (val) => val }
};

async function loadData () {
  const settingsKeys = Object.keys(FIELDS);
  const savedSettings = await browser.storage.local.get(settingsKeys);

  for (let key in savedSettings) {
    FIELDS[key].default = SETTINGS.DEFAULT[key];
    STATE[key] = savedSettings[key] || SETTINGS.DEFAULT[key];
  }

  await Message.getData().then(saveData);
}

function getState () {
  return {
    allExistingTags: STATE.allExistingTags.map((tag) => ({ name: tag })),
    pageSize: STATE.PAGE_SIZE,
    selectedColor: STATE.COLOR,
    visitedPagesLength: STATE.VISITED_PAGES_LENGTH,
    colorSchemes: Object.keys(SETTINGS.COLOR_SCHEMES).map((color) => ({ option: color })),
  }
}

function updateForm (value, name) {
  STATE[name] = value;
  runListeners();
}

function saveSettings () {
  const NEW_SETTINGS = {};

  for (let key in FIELDS) {
    const newValue = FIELDS[key].validate(STATE[key]) ? STATE[key] : FIELDS[key].default;
    NEW_SETTINGS[key] = newValue;
  }

  Object.assign(STATE, NEW_SETTINGS);
  browser.storage.local.set(NEW_SETTINGS);
  runListeners();
}

function resetToDefaults () {
  Object.assign(STATE, SETTINGS.DEFAULT);
  browser.storage.local.set(SETTINGS.DEFAULT);
  runListeners();
}

function addListener (fn) {
  LISTENERS.push(fn);
}

function runListeners () {
  LISTENERS.forEach((fn) => fn(store));
  return Promise.resolve();
}

async function removeTag (tag) {
  Message.removeTag(tag).then(saveData)
}


function saveData ({ allExistingTags, savedSearches }) {
  if (allExistingTags) {
    Object.assign(STATE, { allExistingTags });
  }

  if (savedSearches) {
    Object.assign(STATE, { savedSearches });
  }

  runListeners();
}

function startSearch (query) {
  Message.startSearch(query);
}

function removeSearch (string) {
  return Message.removeSearch(string).then(saveData);
}

async function getSavedSearches () {
  const { savedSearches } = await Message.getSavedSearches();
  return savedSearches;
}
