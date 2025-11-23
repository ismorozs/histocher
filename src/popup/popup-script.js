const browser = require('webextension-polyfill');

import Couli from 'couli';

import Popup from './ui/components/popup/index';

import { onMessage } from '../common/interaction';

window.__IS_BACKGROUND_SCRIPT__ = true;

browser.runtime.onMessage.addListener((message) => onMessage(message));

Couli.apply(document.querySelector('#app'), Popup);
