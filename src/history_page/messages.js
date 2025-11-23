import { sendMessageToBackground } from '../common/interaction';

export default {
  saveSearchQuery,
  removeSearchQuery
}

function saveSearchQuery (query, queryName) {
  return sendMessageToBackground('saveSearchQuery', { query, queryName });
}

function removeSearchQuery (query, queryName) {
  return sendMessageToBackground('removeSearchQuery', { query, queryName });
}
