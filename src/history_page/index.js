const browser = require('webextension-polyfill');

import { onMessage, sendMessageToBackground } from '../common/interaction';
import actions from './actions';
import UI from './ui';

UI.generateStyles();

browser.runtime.onMessage.addListener((message) => onMessage(message, actions));

browser.tabs.getCurrent().then((tab) => sendMessageToBackground("historyPagePrepared", { tabId: tab.id }));
