const browser = require('webextension-polyfill');

import State from './state';
import Message from './messages';

const WRAPPER_PADDING = 55;
const MAX_WRAPPER_WIDTH = 1366;
const VISIT_COUNTS_WIDTH = 45;
const LAST_VISIT_TIME_WIDTH = 130;
const REMOVE_BUTTON_WIDTH = 14;
const INFO_PANEL_HEIGHT = 74;

const FAVICON_SAVE_KEY = 'favicon';
const DEFAULT_FAVICON_PATH = '/favicon.ico';

const WRAPPER_EL = document.querySelector('.wrapper');
const SUMMARY_EL = document.querySelector('.summary');
const TOTAL_COUNT = document.querySelector('.totalCount');
const CURRENT_PAGE_EL = document.querySelector('.pageNum');
const TABLE_CONTAINER_EL = document.querySelector('.table-container');
const SPINNER_EL = document.querySelector('.spinner');
const FULL_QUERY_EL = document.querySelector('.fullQuery');
const SAVE_BUTTON = document.querySelector('.saveButton');
const QUERY_NAME = document.querySelector('.queryName');

const ROW_OPTS = {
  title: { name: 'Title', value: createTitle },
  url: { name: 'Url', value: createLink },
  lastVisitTime: { name: 'Visits', value: createDate },
  visitTimes: { name: ' ', value: createVisitCount },
  removeButton: { name: " ", value: createRemoveButton }
};

const ICONS_URLS = {};

const UI_SELECTORS = [ 'query', 'fullQuery', 'pageNum', 'totalPages', 'totalCount', 'queryName'];

export default {
  setupElements,
  buildPage,
  generateStyles,
  assignListeners,
  copyQuery,
}

function setupElements (data) {
  UI_SELECTORS.forEach((selector) => {
    const el = document.querySelector('.' + selector);

    if (typeof el.value !== 'undefined') {
      el.value = data[selector];
      return;
    }

    writeToNode(el, data[selector]);
  });

  document.title = data.query;
  setSaveButton(data.isSaved);

  State.tabState(data);

  generateColorScheme(data.color);
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

function buildPage (data) {
  emptyNode(TABLE_CONTAINER_EL);
  const table = createTable(data.list);
  TABLE_CONTAINER_EL.appendChild(table);
  State.currentPage(data.pageNum);
  writeToNode(CURRENT_PAGE_EL, data.pageNum);
  writeToNode(TOTAL_COUNT, data.totalCount);

  WRAPPER_EL.classList.add('white');
  SUMMARY_EL.classList.remove('hidden');
  SPINNER_EL.classList.add('hidden');

  window.TABLE_CONTAINER_EL = TABLE_CONTAINER_EL;

  if (data.scrollY) {
    TABLE_CONTAINER_EL.firstChild.scroll(0, data.scrollY);
  }
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
  if (!values.visitTimes.length) {
    return span;
  }

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

function createRemoveButton ({ id }) {
  const span = document.createElement("span");
  span.classList.add("remove");
  span.title = "Remove";
  span.dataset.id = id;
  return span;
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
  const titleWidth = (wrapperWidth - VISIT_COUNTS_WIDTH - LAST_VISIT_TIME_WIDTH - REMOVE_BUTTON_WIDTH) / 5 * 3;
  const urlWidth = (wrapperWidth - VISIT_COUNTS_WIDTH - LAST_VISIT_TIME_WIDTH - REMOVE_BUTTON_WIDTH) / 5 * 2;

  const stylesStr = `
    .wrapper { margin-left: ${wrapperPadding}px; margin-right: ${wrapperPadding}px; }
    table { height: ${tableHeight}px; }
    .title { width: ${titleWidth}px; }
    .url { width: ${urlWidth}px; }
    .visitTimes { width: ${VISIT_COUNTS_WIDTH}px; }
    .lastVisitTime { width: ${LAST_VISIT_TIME_WIDTH}px; }
    .remove { width: ${REMOVE_BUTTON_WIDTH}px; }
  `;

  appendStyles(stylesStr);
}

function appendStyles (styleStr) {
  const styleEl = document.createElement('style');
  styleEl.appendChild( document.createTextNode(styleStr) );
  document.head.appendChild(styleEl);
}


function writeToNode (node, text) {
  const textNode = document.createTextNode(text);
  emptyNode(node);
  node.appendChild(textNode);
}

function assignListeners (obj) {

  for (let selector in obj) {
    const listeners = obj[selector];

    for (let action in listeners) {
      document.querySelector(selector).addEventListener(action, listeners[action]);
    }
  }
}

function copyQuery () {
  FULL_QUERY_EL.classList.remove('hidden');
  FULL_QUERY_EL.select();
  document.execCommand('copy');
  FULL_QUERY_EL.classList.add('hidden');
}

function setSaveButton (bool) {
  let text;
  let operation;
  let classToAdd;
  let classToRemove;

  if (bool) {
    text = 'Forget query';
    operation = 'remove';
    classToAdd = 'red';
    classToRemove = 'green'
  } else {
    text = 'Save query';
    operation = 'save';
    classToAdd = 'green';
    classToRemove = 'red'
  }

  SAVE_BUTTON.classList.add(classToAdd);
  SAVE_BUTTON.classList.remove(classToRemove);

  const cb = () => {
    const queryName = QUERY_NAME.value;
    const query = State.tabState().query;
    Message[operation + 'SearchQuery'](query, queryName).then(({ saved }) => setSaveButton(saved));
  }
  writeToNode(SAVE_BUTTON, text);
  SAVE_BUTTON.onclick = cb;
}
