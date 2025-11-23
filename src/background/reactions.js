const browser = require('webextension-polyfill');

import State from './state';
import Search from './search';
import Tag from './tags';
import prepareOptions from './parse';
import showResults from './show';
import Message from './messages';
import { getCurrentTab, sendMessage, sendMessageToTab } from '../common/interaction';
import { SPECIAL_PAGES } from './common';

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
  openPage,
  historyPagePrepared,
  removeAllEntries,
  removeOneEntry,
  getSavedSearches,
};

const CONTENT_PAGE_URL = '/history_page/index.html';

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

async function getData ({ forPopup }) {
  const pageData = await getCurrentTab();

  let recentlyVisitedPages = Promise.resolve();
  let assignedTags = Promise.resolve();
  let favIconUrl = null;
  if (forPopup) {
    const domain = extractDomain(pageData.url);
    assignedTags = Tag.getForPage(pageData);
    recentlyVisitedPages = Search.run(domain + ' +^url ' + domain, State.visitedPagesLength());
    favIconUrl = pageData.favIconUrl;
  };
  
  return {
    allExistingTags: await Tag.getAll(),
    assignedTags: await assignedTags,
    savedSearches: await State.getSavedSearches(),
    recentlyVisitedPages: await recentlyVisitedPages,
    favIconUrl,
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

async function startSearch ({ query }) {
  const tab = await browser.tabs.create({ active: true, url: CONTENT_PAGE_URL });
  State.setTabState(tab.id, { tab, query });
}

async function historyPagePrepared (message) {
  const { tabId } = message;
  const { query  } = State.getTabState(tabId);
  sendMessageToTab(tabId, "saveQuery", { query });
}

async function continueBuildingPage ({ tabId }) {
  const { query, tab } = State.getTabState(tabId);
  const options = prepareOptions(query);

  const searchResults = await Search.run(options);
  await State.saveResults(tab.id, searchResults, 0);
  const tabState = await State.initTabState(tab.id, searchResults, options);
  await Message.setupClientPage(tabState);
  showResults(tabState);
}

function saveSearchQuery ({ query, queryName }) {
  return State.saveSearch(query, queryName).then(() => ({ saved: true }));
}

async function removeSearchQuery ({ query }) {
  return { savedSearches: await State.removeSearch(query), saved: false };
}

async function getSavedSearches () {
  return { savedSearches: await State.getSavedSearches() };
}

function openPage ({ url }){
  browser.tabs.create({ active: true, url: SPECIAL_PAGES[url] || url });
}

function extractDomain (url) {
  return url.split('/').slice(0, 3).join('/').split('#')[0].split('?')[0];
}

async function removeAllEntries ({ tabId }) {
  const { totalPages } = State.getTabState(tabId);

  for (let i = 0; i < totalPages; i++) {
    const resultsPage = await State.getResultsPage(tabId, i);

    for (let j = 0; j < resultsPage.length; j++) {
      await browser.history.deleteUrl({ url: resultsPage[j].url });
    } 
  }

  browser.tabs.remove([tabId]);
}

async function removeOneEntry ({ tabId, id, scrollY }) {
  const tabState = State.getTabState(tabId);
  const { results: searchResults, pageNum } = tabState;
  const idx = searchResults.findIndex((record) => record.id == id);

  await browser.history.deleteUrl({ url: searchResults[idx].url });
  searchResults.splice(idx, 1);

  await State.saveResults(tabId, searchResults, 0);
  const newTabState = await State.initTabState(tabId, searchResults, tabState);

  showResults(newTabState, scrollY);
}
