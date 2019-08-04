const browser = require('webextension-polyfill');

import State from './state';
import Search from './search';
import Tag from './tags';
import handleResults from './postProcess';
import prepareOptions from './parse';
import showResults from './show';
import Message from './messages';
import { getCurrentTab } from '../common/interaction';

export default {
  movePage,
  jumpToPage,
  getData,
  addTagToPage,
  removeTagFromPage,
  getAllTags,
  createTag,
  removeTag,
  continueBuildingPage,
  saveSearchQuery,
  removeSearchQuery,
  startSearch,
  openSettings,
  openHelp,
};

const CONTENT_PAGE_URL = '/history_page/index.html';
const SETTINGS_PAGE_URL = '/options/options.html';
const HELP_PAGE_URL = '/help/help.html';

function movePage (message) {
  const tabState = State.getTabState(message.tabId);
  const newPageNum = increment(tabState.pageNum, message.inc, [0, tabState.totalPages - 1]);
  tabState.pageNum = newPageNum;
  showResults(tabState);
}

function increment (num, inc, range) {
  const newNum = num + inc;
  if (newNum > range[1]) {
    return range[0];
  }

  if (newNum < range[0]) {
    return range[1];
  }

  return newNum;
}

function jumpToPage (message) {
  const tabState = State.getTabState(message.tabId);

  if (message.pageNum > tabState.totalPages || message.pageNum < 1) {
    return;
  }

  tabState.pageNum = message.pageNum - 1;
  showResults(tabState);
}

async function getData () {
  const pageData = await getCurrentTab();

  return {
    allExistingTags: await Tag.getAll(),
    assignedTags: await Tag.getForPage(pageData),
    savedSearches: await State.getSavedSearches(),
  }
}

async function addTagToPage ({ tag }) {
  const allExistingTags = await Tag.create(tag);

  const pageData = await getCurrentTab();
  await Tag.addToPage(tag, pageData);
  const tagsForPage = await Tag.getForPage(pageData);
  
  return { allExistingTags, assignedTags: tagsForPage };
}

async function removeTagFromPage ({ tag }) {
  const pageData = await getCurrentTab();
  await Tag.removeFromPage(tag, pageData);
  return { assignedTags: await Tag.getForPage(pageData) };
}

async function getAllTags () {
  return { allExistingTags: await Tag.getAll() };
}

async function createTag ({ tag }) {
  return { allExistingTags: await Tag.create(tag) }
}

async function removeTag ({ tag }) {
  return { allExistingTags: await Tag.remove(tag) };
}

function startSearch ({ query }) {
  return browser.tabs.create({ active: true, url: CONTENT_PAGE_URL })
    .then((tab) => State.setTabState(tab.id, { tab, query }));
}

function continueBuildingPage ({ tabId }) {
  const { query, tab } = State.getTabState(tabId);
  const options = prepareOptions(query);

  let baseSearch;
  if (options.tags.length) {
    baseSearch = Search.tags(options.tags);
  } else {
    const searchTerms = options.base.join(' ');
    baseSearch = Search.history(searchTerms, options.timeFrames);
  }

  baseSearch.then((results) => {
    const handledResults = handleResults(results, options);
    State.saveResults(tab.id, handledResults, 0).then(() => {
      State.initTabState(tab.id, handledResults, options).then((tabState) => {
        Message.setupClientPage(tabState).then(() => showResults(tabState));
      });
    });
  });
}

function saveSearchQuery ({ query }) {
  return State.saveSearch(query).then(() => ({ saved: true }));
}

async function removeSearchQuery ({ query }) {
  return { savedSearches: await State.removeSearch(query), saved: false }; 
}

function openSettings () {
  browser.tabs.create({ active: true, url: SETTINGS_PAGE_URL }).then((tab) => State.setTabState(tab.id, true));
}

function openHelp () {
  browser.tabs.create({ active: true, url: HELP_PAGE_URL });
}
