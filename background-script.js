const EXTENSION_PREFIX = 'h';
const SPACE_REGEXP = /\s+/g;
const DEFAULT_START = new Date(0, 0, 0, 0, 0, 0);
const DEFAULT_END = new Date(9999, 11, 31);
const RESULTS_SAVE_KEY = 'results';
const FAVICON_SAVE_KEY = 'favicon';
const TIME_FRAMES_KEY = 'timeFrames';
const CONTENT_PAGE_URL = '/history_page/index.html';

const DATE_REGEXPS = [
  { type: 'FullYear', regexp: /\/(\d{4})\// },
  { type: 'Month', regexp: /\/(\d{1,2})\// },
  { type: 'Date', regexp: /^(?!\/)(\d{1,2})\// },
  { type: 'Hours', regexp: /(\d{1,2})\:/ },
  { type: 'Minutes', regexp: /\:(\d{1,2})/ },
];

const TIME_FRAMES = {
  FullYear: { start: () => 0, end: () => 9999 },
  Month: { start: () => 0, end: () => 11 },
  Date: { start: () => 1, end: getLastDayOfMonth },
  Hours: { start: () => 0, end: () => 23 },
  Minutes: { start: () => 0, end: () => 59 },
};

const LAST_DAYS_OF_MONTHS = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const DATE_TYPES = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes'];
const SORT_TYPES = ['date', 'visit', 'url', 'title']
const REAL_SORT_TYPES = []
  .concat( SORT_TYPES.map((type) => '>' + type) )
  .concat( SORT_TYPES.map((type) => '>' + type[0]) )
  .concat( SORT_TYPES.map((type) => '<' + type) )
  .concat( SORT_TYPES.map((type) => '<' + type[0]) );

const STRING_FILTERS = {
  '+url': (obj, str) => has(obj.url.toLowerCase(), str),
  '+title': (obj, str) => has(obj.title.toLowerCase(), str),
  '-url': (obj, str) => !has(obj.url.toLowerCase(), str),
  '-title': (obj, str) => !has(obj.title.toLowerCase(), str),
};

const COLOR_SCHEMES = {
  grey: '210, 210, 210',
  green: '169, 255, 148',
  blue: '162, 210, 254',
  orange: '254, 208, 162',
  pink: '255, 208, 247',
};

const DEFAULT_SETTINGS = {
  PAGE_SIZE: 300,
  COLOR: 'grey',
};

const STATE = {};

const actions = {
  movePage,
  jumpToPage,
};

browser.omnibox.onInputEntered.addListener(findAndRender);
browser.runtime.onMessage.addListener(onMessage);
browser.storage.onChanged.addListener(onStorageChange);
browser.tabs.onRemoved.addListener(cleanStorage);
browser.tabs.onUpdated.addListener(onFaviconUpdated, { properties: ['favIconUrl'] });

loadSettings();

function loadSettings () {
  const settings_names = Object.keys(DEFAULT_SETTINGS);
  browser.storage.local.get(settings_names).then((savedOptions) => {
    
    for (let key in DEFAULT_SETTINGS) {
      if (typeof savedOptions[key] === 'undefined') {
        savedOptions[key] = DEFAULT_SETTINGS[key];
        browser.storage.local.set({ [key]: savedOptions[key] });
      }
    }

    Object.assign(STATE, savedOptions);
  });
}

function onStorageChange (changes) {
  for (let key in changes) {
    if (DEFAULT_SETTINGS[key]) {
      STATE[key] = changes[key].newValue;
    }
  }
}

function onFaviconUpdated (tabId, changedInfo, tab) {
  const origin = tab.url.split('/').slice(0, 3).join('/')
  browser.storage.local.set({ [origin + FAVICON_SAVE_KEY]: changedInfo.favIconUrl });
}

function onMessage (message) {
  if (message.action && message.senderId === browser.runtime.id) {
    actions[message.action](message);
  }
}

function sendMessageToTab (tabId, action, payload) {
  const message = Object.assign({ action, senderId: browser.runtime.id, background: true }, payload);
  return browser.tabs.sendMessage(tabId, message);
}

function cleanStorage (tabId) {
  if (STATE[tabId]) {
    removeResults(tabId, 0, STATE[tabId].totalPages);
    delete STATE[tabId];
  }
}

function findAndRender (rawString) {
  const options = prepareOptions(rawString);
  const searchTerms = options.base.join(' ');

  createExtensionTab()
    .then((tab) => addColorScheme(tab.id)
      .then(() => searchHistory(searchTerms, options.timeFrames))
      .then((results) => handleResults(results, options))
      .then((results) => saveResults(tab.id, results, 0))
      .then((results) => saveTabState(tab.id, results, options))
      .then((tabState) => setupClientPage(tabState))
      .then(() => showResults(options))
    );
}

function createExtensionTab () {
  return browser.tabs.create({ active: true, url: CONTENT_PAGE_URL });
}

function addColorScheme (tabId) {
  const styleStr = generateStyleString(COLOR_SCHEMES[STATE.COLOR]);
  return browser.tabs.insertCSS(tabId, { code: styleStr });
}

function prepareOptions (rawString) {
  const rawOptions = rawString.split(SPACE_REGEXP).filter((str) => !!str);
  const options = { base: [], timeFrames: [], sort: [], query: rawString, fullQuery: EXTENSION_PREFIX + ' ' + rawString };
  parseOptions(rawOptions, options, 'base');
  flattenTimes (options);

  if (!options.timeFrames.length) {
    options.timeFrames.push({ start: DEFAULT_START, end: DEFAULT_END });
  }

  return options;
}

function searchHistory (searchTerms, timeFrames) {
  const historyRequests = timeFrames.map((timeFrame) => makeHistoryRequest(searchTerms, timeFrame.start, timeFrame.end));

  return Promise.all(historyRequests).then(flattenArray);
}

function handleResults (results, options) {
  const filteredResults = filterResults(results, options);
  const sortedResults = sortResults(filteredResults, options.sort);
  return Promise.resolve(sortedResults);
}

function parseOptions (rawOptions, options, curOption) {
  for (let i = 0; i < rawOptions.length; i++) {
    const word = rawOptions[i];
    
    if (isExactDate(word)) {
      options.timeFrames.push({ start: createDate(word, 'start'), end: createDate(word, 'end') });
      continue;
    }

    if (isStartDate(word)) {
      options.timeFrames.push({ start: createDate(word, 'start'), end: DEFAULT_END });
      continue;
    }

    if (isEndDate(word)) {
      options.timeFrames.push({ start: DEFAULT_START, end: createDate(word, 'end') });
      continue;
    }

    if (has(REAL_SORT_TYPES, word)) {
      options.sort.push(word);
      continue;
    }

    if (STRING_FILTERS[word]) {
      if (!options[word]) {
        options[word] = [];
      }

      return parseOptions(rawOptions.slice(i + 1), options, word);
    }

    options[curOption].push(word);
  }
}

function has (str, substr) {
  return str.indexOf(substr) >= 0;
}

function isExactDate (str) {
  return /^\=[\/\:]?\d+/.test(str);
}

function isStartDate (str) {
  return /^\+[\/\:]?\d+/.test(str);
}

function isEndDate (str) {
  return /^\-[\/\:]?\d+/.test(str);
}

function createDate (dateArg, borderType) {
  const dateStr = dateArg.slice(1);
  const date = new Date();
  let autoSetDateStartIdx = 0;
  
  DATE_REGEXPS.forEach((test) => {
    const match = test.regexp.exec(dateStr);
    
    if (match) {
      let number = match[1];
      autoSetDateStartIdx = DATE_TYPES.indexOf(test.type) + 1;
      
      if (test.type === 'Month') {
        number--;
      }

      date['set' + test.type](number);
    }

  });

  DATE_TYPES.slice(autoSetDateStartIdx).forEach((dateType) =>
    date['set' + dateType](TIME_FRAMES[dateType][borderType](date)));

  return date;
}

function getLastDayOfMonth (date) {
  const month = date.getMonth();

  if (month !== 1) {
    return LAST_DAYS_OF_MONTHS[month];
  }

  return LAST_DAYS_OF_MONTHS[month][ isLeapYear(date.getFullYear()) ];
}

function isLeapYear (year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return 1;
  }

  return 0;
}

function flattenTimes (options) {
  const flattenedTimes = [];

  let cur;
  let next;
  for (let i = 0; i < options.timeFrames.length; i++) {
    cur = options.timeFrames[i];
    next = options.timeFrames[i + 1];

    if (next && cur.start < next.start && cur.end > next.start && cur.end < next.end) {
      options.timeFrames[i + 1] = { start: next.start, end: cur.end };
      continue;
    }

    if (next && cur.end > next.end && cur.start < next.end && cur.start > next.start) {
      options.timeFrames[i + 1] = { start: cur.start, end: next.end };
      continue;
    }

    if (next && cur.start < next.start && cur.end > next.end) {
      options.timeFrames[i + 1] = cur;
      continue;
    }

    if (next && cur.start > next.start && cur.end < next.end) {
      continue;
    }

    flattenedTimes.push(cur);
  }

  options.timeFrames = flattenedTimes;
}

function makeHistoryRequest (text, startTime, endTime) {
  return browser.history.search({ text, startTime, endTime, maxResults: Number.MAX_SAFE_INTEGER });
}

function flattenArray (arr) {
  return arr.reduce((a, c) => {
    a.splice.apply(a, [a.length, 0].concat(c));
    return a;
  },[]);
}

function filterResults (results, options) {

  for (let key in options) {
    if (STRING_FILTERS[key]) {
      const strings = options[key];
      strings.forEach((string) => {
        results = results.filter((obj) => STRING_FILTERS[key](obj, string.toLowerCase()));
      });
    }
  }

  return results;
}

function sortResults (results, sortRules) {
  let orderedResults = results;

  sortRules.forEach((rule) => {

    switch (rule) {
      case '>u':
      case '>url':
        orderedResults = orderedResults.sort((a, b) => a.url > b.url);
        break;
      case '<u':
      case '<url':
        orderedResults = orderedResults.sort((a, b) => a.url < b.url);
        break;
      case '>t':
      case '>title':
        orderedResults = orderedResults.sort((a, b) => a.title > b.title);
        break;
      case '<t':
      case '<title':
        orderedResults = orderedResults.sort((a, b) => a.title < b.title);
        break;
      case '>d':
      case '>date':
        orderedResults = orderedResults.sort((a, b) => a.lastVisitTime > b.lastVisitTime);
        break;
      case '<d':
      case '<date':
        orderedResults = orderedResults.sort((a, b) => a.lastVisitTime < b.lastVisitTime);
        break;
      case '>v':
      case '>visit':
        orderedResults = orderedResults.sort((a, b) => a.visitCount > b.visitCount);
        break;
      case '<v':
      case '<visit':
        orderedResults = orderedResults.sort((a, b) => a.visitCount < b.visitCount);
        break;
    }

  });

  return orderedResults;
}

function saveResults (tabId, results, pageNum) {
  const list = results.slice(pageNum * STATE.PAGE_SIZE, pageNum * STATE.PAGE_SIZE + STATE.PAGE_SIZE);
  
  if (!list.length) {
    return results;
  }

  return browser.storage.local.set({ [tabId + RESULTS_SAVE_KEY + pageNum]: list }).then(() => saveResults(tabId, results, pageNum + 1));
}

function removeResults (tabId, pageNum, pagesLength) {
  if (pageNum > pagesLength) {
    return true;
  }

  return browser.storage.local.remove(tabId + RESULTS_SAVE_KEY + pageNum).then(() => removeResults(tabId, pageNum + 1, pagesLength));
}

function saveTabState (tabId, results, options) {
  return STATE[tabId] = Object.assign(options, {
    pageNum: 0,
    totalCount: results.length,
    totalPages: Math.ceil(results.length / STATE.PAGE_SIZE),
    tabId,
  });
}

function setupClientPage (tabState) {
  return sendMessageToTab(tabState.tabId, 'setupClientPage', tabState);
}

function showResults (opts) {
  const listKey = opts.tabId + RESULTS_SAVE_KEY + opts.pageNum;

  browser.storage.local.get(listKey)
    .then((storageData) => getAllVisits(storageData[listKey], opts)
      .then((list) => sendMessageToTab(opts.tabId, 'buildPage', { list, pageNum: opts.pageNum + 1 })));
}

function getAllVisits (historyList, opts) {
  if (!historyList) {
    return [];
  }

  if (historyList.visitsLoaded) {
    return Promise.resolve(historyList);
  }

  const visitRequests = historyList.map((historyItem) => getVisits(historyItem, opts.timeFrames));
  return Promise.all(visitRequests)
    .then((historyWithVisits) => {
      historyWithVisits.visitsLoaded = true;
      return browser.storage.local.set({ [opts.tabId + RESULTS_SAVE_KEY + opts.pageNum]: historyWithVisits })
        .then(() => historyWithVisits);
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

function generateStyleString (color) {
  const lightBackground = `background-color: rgba(${color}, 0.2);`;
  const darkBackground = `background-color: rgba(${color}, 0.7);`;

  return `
    tr:nth-child(odd) { ${lightBackground} }
    tr:hover { ${darkBackground} }
    .query:hover { ${lightBackground} }
    .query:active { ${darkBackground} }
  `;
}

function movePage (message) {
  const tabState = STATE[message.tabId];
  const newPageNum = increment(tabState.pageNum, message.inc, [0, tabState.totalPages - 1]);
  tabState.pageNum = newPageNum;
  showResults(tabState);
}

function increment (num, inc, range) {
  const newNum = num + inc;
  if (newNum > range[1]) {
    return range[0];
  }

  if (newNum < range[0]) {
    return range[1];
  }

  return newNum;
}

function jumpToPage (message) {
  const tabState = STATE[message.tabId];

  if (message.pageNum > tabState.totalPages || message.pageNum < 1) {
    return;
  }

  tabState.pageNum = message.pageNum - 1;
  showResults(tabState);
}
