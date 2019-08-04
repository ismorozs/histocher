const browser = require('webextension-polyfill');

const ALL_TAGS_KEY = 'ALL_TAGS';
const TAG_KEY_PREFIX = 'TAG_KEY';

export default {
  create: createTag,
  remove: removeTag,
  getAll: getAllTags,
  setAll: setAllTags,
  getForPage: getTagsForPage,
  addToPage: addTagToPage,
  removeFromPage: removeTagFromPage,
  getTagedPages: getTagedPages,
  setTagedPages: setTagedPages,
}

function getAllTags () {
  return browser.storage.local.get(ALL_TAGS_KEY).then((savedResults) => savedResults[ALL_TAGS_KEY] || []);
}

function setAllTags (tags) {
  return browser.storage.local.set({ [ALL_TAGS_KEY]: tags }).then(() => tags);
}

function getTagedPages (tag) {
  const tagKey = TAG_KEY_PREFIX + tag
  return browser.storage.local.get(tagKey).then((savedResults) => savedResults[tagKey] || {});
}

function setTagedPages (tag, pages) {
  const tagKey = TAG_KEY_PREFIX + tag;
  return browser.storage.local.set({ [tagKey]: pages });
}

async function addTagToPage (tag, { url, title }) {
  const tagsPages = await getTagedPages(tag);
  tagsPages[url] = { title };
  return setTagedPages(tag, tagsPages)
}

async function removeTagFromPage (tag, { url}) {
  const tagsPages = await getTagedPages(tag);
  delete tagsPages[ url ];
  return setTagedPages(tag, tagsPages);
}

async function getTagsForPage ({ url }) {
  const allExistingTags = await getAllTags();
  
  const tagsForPage = [];

  for (let i = 0; i < allExistingTags.length; i++) {
    const tag = allExistingTags[i];
    const tagsPages = await getTagedPages(tag);

    if (tagsPages[ url ]) {
      tagsForPage.push(tag);
    }
  }

  return tagsForPage;
}

async function createTag (tag) {
  const allExistingTags = await getAllTags();

  if (!allExistingTags.includes(tag)) {
    allExistingTags.push(tag);
    allExistingTags.sort();
    await setAllTags(allExistingTags);
  }

  return allExistingTags;
}

async function removeTag (tag) {
  const allTags = await getAllTags();
  allTags.splice( allTags.indexOf(tag), 1);
  browser.storage.local.remove(TAG_KEY_PREFIX + tag);
  return setAllTags(allTags);
}
