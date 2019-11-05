const browser = require('webextension-polyfill');

const RESULTS_SAVE_KEY = 'results';
const SEARCHES_SAVE_KEY = 'searches'

const COLOR_SCHEMES = {
  grey: '210, 210, 210',
  green: '169, 255, 148',
  blue: '162, 210, 254',
  orange: '254, 208, 162',
  pink: '255, 208, 247',
};

const DEFAULT_SETTINGS = {
  PAGE_SIZE: 300,
  COLOR: 'grey',
  VISITED_PAGES_LENGTH: 10,
};

const STATE = {
  tabs: {},
};

export const SETTINGS = {
  COLOR_SCHEMES,
  DEFAULT: DEFAULT_SETTINGS,
};

export default {
  getTabState,
  setTabState,
  setPopupState,
  loadSettings,
  onSettingsChange,
  saveResults,
  removeResults,
  initTabState,
  removeTabState,
  getResultsPage,
  saveResultsPage,
  removeResultsPage,
  getSavedSearches,
  saveSearch,
  removeSearch,
  isSearchSaved,
  visitedPagesLength
}

function getTabState (tabId) {
  return STATE.tabs[ tabId ];
}

function setTabState (tabId, state) {
  return STATE.tabs[ tabId ] = state;
}

function setPopupState (tabId, state) {
  return STATE.tabs[ tabId ].popupOpen = state;
}

async function initTabState (tabId, results, options) {
  return setTabState(tabId, {
    ...options,
    pageNum: 0,
    totalCount: results.length,
    totalPages: Math.ceil(results.length / SETTINGS.PAGE_SIZE),
    tabId,
    color: COLOR_SCHEMES[ SETTINGS.COLOR ],
    isSaved: await isSearchSaved(options.query),
  });
}

function loadSettings () {
  const settings_names = Object.keys(DEFAULT_SETTINGS);
  browser.storage.local.get(settings_names).then((savedOptions) => {
    
    for (let key in DEFAULT_SETTINGS) {
      if (typeof savedOptions[key] === 'undefined') {
        savedOptions[key] = DEFAULT_SETTINGS[key];
        browser.storage.local.set({ [key]: savedOptions[key] });
      }
    }

    Object.assign(SETTINGS, savedOptions);
  });
}

function onSettingsChange (changes) {
  for (let key in changes) {
    if (DEFAULT_SETTINGS[key]) {
      SETTINGS[key] = changes[key].newValue;
    }
  }
}

function saveResults (tabId, results, pageNum) {
  const list = results.slice(pageNum * SETTINGS.PAGE_SIZE, pageNum * SETTINGS.PAGE_SIZE + SETTINGS.PAGE_SIZE);
  
  if (!list.length) {
    return Promise.resolve(results);
  }

  return saveResultsPage(tabId, pageNum, list).then(() => saveResults(tabId, results, pageNum + 1));
}

function removeResults (tabId, pageNum, pagesLength) {
  if (pageNum > pagesLength) {
    return true;
  }

  return removeResultsPage(tabId, pageNum).then(() => removeResults(tabId, pageNum + 1, pagesLength));
}

function removeTabState (tabId) {
  removeResults(tabId, 0, getTabState(tabId).totalPages || 0);
  setTabState(tabId, undefined);
}

function getResultsPage (tabId, pageNum) {
  const listKey = tabId + RESULTS_SAVE_KEY + pageNum;
  return browser.storage.local.get(listKey).then((savedResults) => savedResults[listKey]);
}

function saveResultsPage (tabId, pageNum, list) {
  return browser.storage.local.set({ [tabId + RESULTS_SAVE_KEY + pageNum]: list });
}

function removeResultsPage (tabId, pageNum) {
  return browser.storage.local.remove(tabId + RESULTS_SAVE_KEY + pageNum);
}

function getSavedSearches () {
  return browser.storage.local.get(SEARCHES_SAVE_KEY).then((result) => result[SEARCHES_SAVE_KEY] || []);
}

function setSavedSearches (searches) {
  return browser.storage.local.set({ [SEARCHES_SAVE_KEY]: searches });
}

async function isSearchSaved (searchString) {
  const allSearches = await getSavedSearches();
  return allSearches.includes(searchString);
} 

async function saveSearch (searchString) {
  const allSearches = await getSavedSearches();
  
  if (!allSearches.includes(searchString)) {
    allSearches.unshift(searchString);
    await setSavedSearches(allSearches);
  }
  
  return allSearches;
}

async function removeSearch (searchString) {
  const allSearches = await getSavedSearches();
  allSearches.splice( allSearches.indexOf(searchString), 1);
  await setSavedSearches(allSearches);
  return allSearches;
}

function visitedPagesLength () {
  return SETTINGS.VISITED_PAGES_LENGTH;
}
