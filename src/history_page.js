const browser = require('webextension-polyfill');

import { onMessage, sendMessageToBackground } from './common/interaction';
import actions from './history_page/actions';
import UI from './history_page/ui';

UI.generateStyles();

browser.runtime.onMessage.addListener((message) => onMessage(message, actions));

browser.tabs.getCurrent().then((tab) => sendMessageToBackground('continueBuildingPage', { tabId: tab.id }));
