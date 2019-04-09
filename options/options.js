const SETTINGS = {
  PAGE_SIZE: { default: 300, validate: (val) => +val },
  COLOR: { default: 'grey', validate: (val) => val },
};

browser.storage.onChanged.addListener((changes) => {
  for (let key in changes) {
    if (SETTINGS[key]) {
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
  const settingsKeys = Object.keys(SETTINGS);

  browser.storage.local.get(settingsKeys)
    .then((values) => {
      for (let key in values) {
        document.querySelector('.' + key).value = values[key];
      }
    });
}

function saveSettings (e) {
  e.preventDefault();

  const form = document.querySelector('.form');

  const NEW_SETTINGS = {};
  for (let key in SETTINGS) {
    const inputValue = form.elements[key].value
    NEW_SETTINGS[key] = SETTINGS[key].validate(inputValue) || SETTINGS[key].default;
  }

  browser.storage.local.set(NEW_SETTINGS);
}

function resetToDefaults (e) {
  const DEFAULT_SETTINGS = {};
  for (let key in SETTINGS) {
    DEFAULT_SETTINGS[key] = SETTINGS[key].default;
  }

  browser.storage.local.set(DEFAULT_SETTINGS);
}
