const browser = require('webextension-polyfill');

import UI from './ui';
import State from './state';
import { sendMessageToBackground } from '../common/interaction';

export default {
  setupClientPage,
  buildPage,
};

function setupClientPage (data) {
  UI.setupElements(data);

  UI.assignListeners({
    '.moveBack': { click: () => movePage(-1) },
    '.moveForward': { click: () => movePage(1) },
    '.jumpToPage': { click: () => jumpToPage(State.currentPage()) },
    '.query': { click: () => UI.copyQuery() },
  });
}

function buildPage (data) {
  UI.buildPage(data);
}

function movePage (inc) {
  browser.tabs.getCurrent()
    .then((tab) => sendMessageToBackground('movePage', { inc, tabId: tab.id }));
}

function jumpToPage (defaultPage) {
  const userInput = window.prompt('Go to page:', defaultPage);

  if (userInput === null) {
    return;
  }

  browser.tabs.getCurrent()
    .then((tab) => sendMessageToBackground('jumpToPage', { pageNum: +userInput, tabId: tab.id }));
}
