const browser = require('webextension-polyfill');

import { DEFAULT_SETTINGS, COLOR_SCHEMES } from './values';

const FIELDS = {
  PAGE_SIZE: { validate: (val) => +val },
  COLOR: { validate: (val) => val, options: COLOR_SCHEMES }
};

browser.storage.onChanged.addListener((changes) => {
  for (let key in changes) {
    if (FIELDS[key]) {
      document.querySelector('.' + key).value = changes[key].newValue;
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  setupInterface();

  document.querySelector('.save').addEventListener('click', saveSettings);
  document.querySelector('.defaults').addEventListener('click', resetToDefaults);
});

function setupInterface () {
  const settingsKeys = Object.keys(FIELDS);

  browser.storage.local.get(settingsKeys)
    .then((values) => {
      for (let key in values) {
        const field = FIELDS[key];
        const el = document.querySelector('.' + key);

        if (field.options) {
          appendOptions(el, field.options);
        }
        
        field.default = DEFAULT_SETTINGS[key].default;
        el.value = values[key];
      }
    });
}

function saveSettings (e) {
  e.preventDefault();

  const form = document.querySelector('.form');

  const NEW_SETTINGS = {};
  for (let key in FIELDS) {
    const newValue = FIELDS[key].validate( form.elements[key].value ) || FIELDS[key].default;
    NEW_SETTINGS[key] = newValue;
  }

  browser.storage.local.set(NEW_SETTINGS);
}

function resetToDefaults () {
  browser.storage.local.set(DEFAULT_SETTINGS);
}

function appendOptions (select, options) {
  for (let value in options) {
    const option = document.createElement('option');
    option.value = options[value];
    option.appendChild( document.createTextNode(value) );
    select.appendChild(option);
  }
}
