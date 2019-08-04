import { sendMessageToBackground } from '../common/interaction';

export default {
  saveSearchQuery,
  removeSearchQuery
}

function saveSearchQuery (query) {
  return sendMessageToBackground('saveSearchQuery', { query });
}

function removeSearchQuery (query) {
  return sendMessageToBackground('removeSearchQuery', { query });
}
