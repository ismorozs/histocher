import { sendMessageToBackground } from '../common/interaction';

export default {
  removeTag,
  getData,
  startSearch,
  removeSearch,
}

function removeTag (tag) {
  return sendMessageToBackground('removeTag', { tag });
}

function getData (tabId) {
  return sendMessageToBackground('getData', { tabId });
}

function startSearch (query) {
  return sendMessageToBackground('startSearch', { query });
}

function removeSearch (query) {
  return sendMessageToBackground('removeSearchQuery', { query });
}
