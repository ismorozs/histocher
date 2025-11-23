const browser = require('webextension-polyfill');

import UI, { INFO_PANEL_HEIGHT } from './ui';
import State from './state';
import { sendMessageToBackground } from '../common/interaction';

export default {
  setupClientPage,
  buildPage,
  saveQuery,
};

function setupClientPage (data) {
  UI.setupElements(data);

  UI.assignListeners({
    '.moveBack': { click: () => movePage(-1) },
    '.moveForward': { click: () => movePage(1) },
    '.jumpToPage': { click: () => jumpToPage(State.currentPage()) },
    '.removeAll': { click: () => removeAllEntries() },
    '.query': { click: () => UI.copyQuery() },
    '.table-container': { click: (e) => handleTableClick(e) }
  });
}

function buildPage (data) {
  UI.buildPage(data);
}

function movePage (inc) {
  browser.tabs.getCurrent()
    .then((tab) => sendMessageToBackground('movePage', { inc, tabId: tab.id }));
}

function removeAllEntries () {
  browser.tabs
    .getCurrent()
    .then((tab) => sendMessageToBackground("removeAllEntries", { tabId: tab.id }));
}

function jumpToPage (defaultPage) {
  const userInput = window.prompt('Go to page:', defaultPage);

  if (userInput === null) {
    return;
  }

  browser.tabs.getCurrent()
    .then((tab) => sendMessageToBackground('jumpToPage', { pageNum: +userInput, tabId: tab.id }));
}

function saveQuery ({ query }) {
  browser.tabs
    .getCurrent()
    .then((tab) =>
      sendMessageToBackground("continueBuildingPage", { tabId: tab.id, query })
    );
}

async function handleTableClick (e) {
  if (e.target.classList.contains("remove")) {
    e.stopPropagation();

    const { id } = e.target.dataset;
    const tab = await browser.tabs.getCurrent();
    const scrollY = e.target.closest("table").scrollTop;

    sendMessageToBackground("removeOneEntry", {
      tabId: tab.id,
      id,
      scrollY,
    });
  }
}
