const browser = require('webextension-polyfill');

import Couli from 'couli';
import './popup/ui/components/history-tag/index';
import './popup/ui/components/popup/index';

import { onMessage } from './common/interaction';

window.__IS_BACKGROUND_SCRIPT__ = true;

browser.runtime.onMessage.addListener((message) => onMessage(message));

const popup = document.createElement('history-searcher-popup');
document.body.appendChild(popup);

Couli.apply('body');
