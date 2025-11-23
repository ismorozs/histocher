import { sendMessage, sendMessageToTab } from '../common/interaction';
import State from './state';
import reactions from './reactions';

export default {
  switchPopup,
  sendTagData,
  buildPage,
  setupClientPage,
};

async function switchPopup (tab) {
  const tabState = State.getTabState(tab.id);
  
  if (typeof tabState === 'undefined') {
    return await initializePopup(tab);
  }

  return sendMessage('popupState', { open: !tabState.popupOpen }).then(() => State.setPopupState(tab.id, !tabState.popupOpen));
}

async function initializePopup (tab) {
  return browser.tabs.executeScript({ file: '/page-script.js' })
    .then(() => State.setTabState(tab.id, { ...tab, popupOpen: true }))
    .then(() => sendMessage('saveTabId', { tabId: tab.id }))
}

async function sendTagData ({ tabId }) {
  const data = await reactions.getData({ tabId });
  sendMessage('getData', data);
}

function buildPage ( tabId, list, pageNum, totalCount, scrollY) {
  sendMessageToTab(tabId, 'buildPage', { list, pageNum, totalCount, scrollY });
}

function setupClientPage (tabState) {
  return sendMessageToTab(tabState.tabId, 'setupClientPage', tabState);
}
