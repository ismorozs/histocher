const browser = require('webextension-polyfill');

const WRAPPER_PADDING = 55;
const MAX_WRAPPER_WIDTH = 1366;
const VISIT_COUNTS_WIDTH = 45;
const LAST_VISIT_TIME_WIDTH = 130;
const INFO_PANEL_HEIGHT = 67;
const SETTINGS_PAGE_URL = '/options/options.html';
const FAVICON_SAVE_KEY = 'favicon';
const DEFAULT_FAVICON_PATH = '/favicon.ico';

const WRAPPER_EL = document.querySelector('.wrapper');
const SUMMARY_EL = document.querySelector('.summary');
const CURRENT_PAGE_EL = document.querySelector('.pageNum');
const TABLE_CONTAINER_EL = document.querySelector('.table-container');
const SPINNER_EL = document.querySelector('.spinner');
const FULL_QUERY_EL = document.querySelector('.fullQuery');

const ROW_OPTS = {
  title: { name: 'Title', value: createTitle },
  url: { name: 'Url', value: createLink },
  lastVisitTime: { name: 'Visits', value: createDate },
  visitTimes: { name: ' ', value: createVisitCount },
};

generateStyles();

document.querySelector('.moveBack').onclick = () => movePage(-1);
document.querySelector('.moveForward').onclick = () => movePage(1);
document.querySelector('.jumpToPage').onclick = () => jumpToPage(CURRENT_PAGE);
document.querySelector('.settings').onclick = () => openSettings();
document.querySelector('.query').onclick = () => copyQuery();

const actions = {
  setupClientPage,
  buildPage,
};

const ICONS_URLS = {};

let CURRENT_PAGE;

browser.runtime.onMessage.addListener(onMessage);

function onMessage (message) {
  if (!message.background) {
    return;
  }

  actions[message.action](message);
}

function setupClientPage (data) {
  for (let key in data) {
    const el = document.querySelector('.' + key);

    if (el) {

      if (typeof el.value !== 'undefined') {
        el.value = data[key];
        continue;
      }

      writeToNode(el, data[key]);
    }
  }

  document.title = data.query;

  generateColorScheme(data.color);
}

function buildPage (message) {
  emptyNode(TABLE_CONTAINER_EL);
  const table = createTable(message.list);
  TABLE_CONTAINER_EL.appendChild(table);
  CURRENT_PAGE = message.pageNum;
  writeToNode(CURRENT_PAGE_EL, message.pageNum);

  WRAPPER_EL.classList.add('white');
  SUMMARY_EL.classList.remove('hidden');
  SPINNER_EL.classList.add('hidden');
}

function createTable (list) {
  const table = document.createElement('table');
  
  list.forEach((values) => {
    const row = createRow(values);
    table.appendChild(row);
  });

  return table;
}

function createRow (values) {
  const row = document.createElement('tr');
  
  for (let cellName in ROW_OPTS) {
    const cell = createCell(cellName, values);
    cell.classList.add(cellName);
    row.appendChild(cell);
  }

  return row;
}

function createCell (cellName, values) {
  const cell = document.createElement('td');

  const cellValue = ROW_OPTS[cellName].value(values);
  cell.appendChild(cellValue);

  return cell;
}

function createText (value, title) {
  const span = document.createElement('span');

  span.title = title || value;
  writeToNode(span, value);

  return span;
}

function createTitle (values) {
  const span = createText(values.title);
  addIcon(span, values.url);
  return span;
}

function addIcon (el, url) {
  const origin = url.split('/').slice(0, 3).join('/');
  const defaultIconUrl = origin + DEFAULT_FAVICON_PATH;

  if (ICONS_URLS[origin]) {
    setIcon(el, ICONS_URLS[origin]);
    return;
  }

  const iconKey = origin + FAVICON_SAVE_KEY;
  browser.storage.local.get(iconKey)
    .then((saved) => {
      const iconUrl = saved[iconKey] || defaultIconUrl;
      ICONS_URLS[origin] = iconUrl;
      setIcon(el, iconUrl);
    });
}

function setIcon (el, iconUrl) {
  el.style.backgroundImage = 'url("' + iconUrl + '")';
}

function createLink (values) {
  const href = values.url;
  const a = document.createElement('a');
  a.href = href;
  a.title = href;
  writeToNode(a, href);
  return a;
}

function createDate (values) {
  const span = document.createElement('span');
  const dateString = generateDateString(values.visitTimes[0].visitTime);
  writeToNode(span, dateString);

  const titleStr = ['Last visit time:\n ' + dateString + '\nVisits:'];
  span.title = titleStr.concat(values.visitTimes.map((visit) => ' ' + generateDateString(visit.visitTime))).join('\n');
  return span;
}

function generateDateString (timestamp) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const dayOfMonth = padZero(date.getDate());

  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return [ dayOfMonth, month, year ].join('/')
    .concat(' ')
    .concat([ hours, minutes ].join(':'));
}

function createVisitCount (values) {
  const visitTimes = values.visitTimes.length;
  return createText('(' + visitTimes + ')', 'Visit count: ' + visitTimes);
}

function padZero (value) {
  if (value < 10) {
    return '0' + value; 
  }

  return value;
}

function emptyNode (node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}

function generateStyles () {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let wrapperWidth = windowWidth - WRAPPER_PADDING * 2;
  let wrapperPadding = WRAPPER_PADDING;

  if (wrapperWidth > MAX_WRAPPER_WIDTH) {
    wrapperWidth = MAX_WRAPPER_WIDTH;
    wrapperPadding = (windowWidth - wrapperWidth) / 2;
  }

  const tableHeight = windowHeight - INFO_PANEL_HEIGHT;
  const titleWidth = (wrapperWidth - VISIT_COUNTS_WIDTH - LAST_VISIT_TIME_WIDTH) / 5 * 3;
  const urlWidth = (wrapperWidth - VISIT_COUNTS_WIDTH - LAST_VISIT_TIME_WIDTH) / 5 * 2;

  const stylesStr = `
    .wrapper { margin-left: ${wrapperPadding}px; margin-right: ${wrapperPadding}px; }
    table { height: ${tableHeight}px; }
    .title { width: ${titleWidth}px; }
    .url { width: ${urlWidth}px; }
    .visitTimes { width: ${VISIT_COUNTS_WIDTH}px; }
    .lastVisitTime { width: ${LAST_VISIT_TIME_WIDTH}px; }
  `;

  appendStyles(stylesStr);
}

function generateColorScheme (color) {
  const lightBackground = `background-color: rgba(${color}, 0.2);`;
  const darkBackground = `background-color: rgba(${color}, 0.7);`;

  const colorScheme = `
    tr:nth-child(odd) { ${lightBackground} }
    tr:hover { ${darkBackground} }
    .query:hover { ${lightBackground} }
    .query:active { ${darkBackground} }
  `;

  appendStyles(colorScheme);
}

function appendStyles (styleStr) {
  const styleEl = document.createElement('style');
  styleEl.appendChild( document.createTextNode(styleStr) );
  document.head.appendChild(styleEl);
}

function movePage (inc) {
  browser.tabs.getCurrent()
    .then((tab) =>
      browser.runtime.sendMessage({ action: 'movePage', inc, tabId: tab.id }));
}

function jumpToPage (defaultPage) {
  const userInput = window.prompt('Go to page:', defaultPage);

  if (userInput === null) {
    return;
  }

  browser.tabs.getCurrent()
    .then((tab) =>
      browser.runtime.sendMessage({ action: 'jumpToPage', pageNum: +userInput, tabId: tab.id }));
}

function openSettings () {
  browser.tabs.create({ active: true, url: SETTINGS_PAGE_URL });
}

function copyQuery () {
  FULL_QUERY_EL.classList.remove('hidden');
  FULL_QUERY_EL.select();
  document.execCommand('copy');
  FULL_QUERY_EL.classList.add('hidden');
}

function writeToNode (node, text) {
  const textNode = document.createTextNode(text);
  emptyNode(node);
  node.appendChild(textNode);
}
