import { sendMessageFromBackground } from '../common/interaction';
import Store from './store';

export default {
  addNewTag,
  removeTag,
  getData,
  startSearch,
  openPage,
};

function addNewTag (tag) {
  return sendMessageFromBackground('addTagToPage', { tag });
}

function removeTag (tag) {
  return sendMessageFromBackground('removeTagFromPage', { tag });
}

function getData () {
  return sendMessageFromBackground('getData', { forPopup: true }).then(Store.savePageData);
}

function startSearch (query) {
  return sendMessageFromBackground('startSearch', { query });
}

function openPage (url) {
  sendMessageFromBackground('openPage', { url });
}
