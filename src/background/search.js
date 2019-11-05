const browser = require('webextension-polyfill');

import Tag from './tags';
import State from './state';
import prepareOptions from './parse';
import handleResults from './postProcess';

const MAX_RESULTS = 2147483647;

export default {
  run,
  visitsForHistory: getVisitsForHistoryEntries,
};

function run (options, maxResults) {
  if (typeof options === 'string') {
    return run( prepareOptions(options) , maxResults);
  }

  if (options.tags.length) {
    return searchTags(options.tags);
  }
  
  return searchHistory(options).then((results) => handleResults(results, options).slice(0, maxResults || MAX_RESULTS));
}

function searchHistory ({ base, timeFrames }) {
  const searchTerms = base.join(' ');
  const historyRequests = timeFrames.map((timeFrame) => makeHistoryRequest(searchTerms, timeFrame.start.getTime(), timeFrame.end.getTime()));

  return Promise.all(historyRequests).then(flattenArray);
}

function makeHistoryRequest (text, startTime, endTime) {
  return browser.history.search({ text, startTime, endTime, maxResults: MAX_RESULTS });
}

function flattenArray (arr) {
  return arr.reduce((a, c) => {
    a.splice.apply(a, [a.length, 0].concat(c));
    return a;
  },[]);
}

function searchTags (tags) {
  const tagedPagesRequests = tags.map((tag) => Tag.getTagedPages(tag));
  return Promise.all(tagedPagesRequests).then(getIntersections);
}

function getIntersections(arrs) {
  let pages = {};

  arrs.forEach((arr, i) => {

    if (!i) {
      pages = arr;
    } else {
      pages = getIntersection(pages, arr);
    }

  });

  for (let key in pages) {
    pages[key].url = key;
  }

  return Object.values(pages);
}

function getIntersection (a, b) {
  const usedKeys = {};
  const intersection = {};

  for (let key in a) {
    if (b[key]) {
      intersection[key] = a[key];
    }
    usedKeys[key] = true;
  }

  for (let key in b) {
    if (usedKeys[key]) {
      continue;
    }

    if (a[key]) {
      intersection[key] = a[key];
    }
  }

  return intersection;
}

function getVisitsForHistoryEntries (historyList, opts) {
  if (!historyList) {
    return Promise.resolve([]);
  }

  if (historyList.visitsLoaded) {
    return Promise.resolve(historyList);
  }

  const visitRequests = historyList.map((historyItem) => getVisits(historyItem, opts.timeFrames));
  return Promise.all(visitRequests)
    .then((historyWithVisits) => {
      historyWithVisits.visitsLoaded = true;
      return State.saveResultsPage(opts.tabId, opts.pageNum, historyWithVisits).then(() => historyWithVisits);
    });
}

function getVisits (historyItem, timeFrames) {
  return browser.history.getVisits({ url: historyItem.url })
    .then((visits) => {
      historyItem.visitTimes = visits.filter((visitItem) => isWithinTimeFrames(visitItem, timeFrames));
      return historyItem;
    });
}

function isWithinTimeFrames (visitItem, timeFrames) {
  let acceptable = false;

  for (let i = 0; i < timeFrames.length; i++) {

    if (visitItem.visitTime >= timeFrames[i].start && visitItem.visitTime <= timeFrames[i].end) {
      acceptable = true;
      break;
    }

  }

  return acceptable;
}
