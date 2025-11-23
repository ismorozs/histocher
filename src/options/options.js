const browser = require('webextension-polyfill');

import Couli from 'couli';

import Options from './ui/components/options/index';

import { onMessage } from '../common/interaction';
import reactions from './reactions';
import backgroundReactions from '../background/reactions';
import { emptyNode, hasClass } from '../common/markup';
import Store from './store';

browser.runtime.onMessage.addListener((message) => onMessage(message, reactions));

Couli.apply(document.querySelector('#app'), Options);

const CREATE_QUERY_INPUTS = document.querySelector('.createQuery');
const HOW_USE_BUTTON = document.querySelector('.howUse');
const START_SEARCH_BUTTON = document.querySelector('.startSearch');
const SAVED_SEARCHES_PANEL = document.querySelector('.savedSearchesPanel');
const SAVED_SEARCHES_LIST = document.querySelector('.savedSearchesList');

initPage();

async function initPage () {
  HOW_USE_BUTTON.addEventListener("click", openHelp);
  START_SEARCH_BUTTON.addEventListener("click", onStartSeach);
  CREATE_QUERY_INPUTS.addEventListener("keyup", handleQueryInputs);
  SAVED_SEARCHES_LIST.addEventListener("click", handleSavedSearchList);

  buildSavedSearchesList();
}

async function buildSavedSearchesList () {
  const searches = await Store.getSavedSearches();
  emptyNode(SAVED_SEARCHES_LIST);

  if (!Object.keys(searches).length) {
    SAVED_SEARCHES_PANEL.classList.add("hidden");
    return;
  }

  SAVED_SEARCHES_PANEL.classList.remove("hidden");

  for (let [query, queryName] of Object.entries(searches)) {
    const runSearchButton = document.createElement("button");
    runSearchButton.classList.add("savedSearch");
    runSearchButton.textContent = queryName || query;
    runSearchButton.dataset.query = query;
    runSearchButton.title = query;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove";
    removeButton.dataset.query = query;
    removeButton.title = "Remove";

    const container = document.createElement("div");
    container.classList.add("savedSearchContainer");
    container.appendChild(runSearchButton);
    container.appendChild(removeButton);

    SAVED_SEARCHES_LIST.append(container);
  }
}

function openHelp () {
  backgroundReactions.openPage({ url: "help" });
}

function onStartSeach (e) {
  let query = "";

  const inputs = Array.from(CREATE_QUERY_INPUTS.children);

  query += inputs.slice(0, 2).reduce((str, cell) => {
    const input = cell.querySelector("[value]");
    return str += ` ${input.value}`;
  }, "");

  inputs.forEach((cell, i) => {
    const input = cell.querySelector("[value]");

    query += appendToQuery(input);
  });

  Store.startSearch(query);
}

function appendToQuery (input) {
  const value = input.value;

  if (!value) {
    return "";
  }

  let prefix = '';

  if (hasClass(input, 'url')) {
    prefix = "+url";
  }

  if (hasClass(input, "title")) {
    prefix = "+title";
  }

  if (hasClass(input, "excludeUrl")) {
    prefix = "-url";
  }

  if (hasClass(input, "excludeTitle")) {
    prefix = "-title";
  }

  if (hasClass(input, "dateFrom")) {
    return ` +${transformDate(value)}`;
  }

  if (hasClass(input, "dateTo")) {
    return ` -${transformDate(value)}`;
  }

  if (hasClass(input, "sort")) {
    return ` ${input.value.toLowerCase()[0]}`;
  }

  if (hasClass(input, "order")) {
    return `${value === "Descending" ? '<' : '>'}`;
  }

  return ` ${prefix} ${value}`;
}

function transformDate (inputDate) {
  return `${inputDate.split("-").reverse().join("/")}/`
}

function handleQueryInputs (e) {
  if (e.keyCode === 13) {
    onStartSeach();
  }
}

async function handleSavedSearchList (e) {
  if (hasClass(e.target, "savedSearch")) {
    Store.startSearch(e.target.dataset.query);
    return;
  }

  if (hasClass(e.target, "remove")) {
    await Store.removeSearch(e.target.dataset.query);
    buildSavedSearchesList();
    return;
  }
}
