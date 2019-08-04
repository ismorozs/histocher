import { sendMessageFromBackground } from '../common/interaction';
import Store from './store';

export default {
  addNewTag,
  removeTag,
  getData,
  startSearch,
  openSettings,
  openHelp,
};

function addNewTag (tag) {
  return sendMessageFromBackground('addTagToPage', { tag });
}

function removeTag (tag) {
  return sendMessageFromBackground('removeTagFromPage', { tag });
}

function getData () {
  return sendMessageFromBackground('getData').then(Store.saveTagData);
}

function startSearch (query) {
  return sendMessageFromBackground('startSearch', { query });
}

function openSettings () {
  sendMessageFromBackground('openSettings', {});
}

function openHelp () {
  sendMessageFromBackground('openHelp', {});
}
