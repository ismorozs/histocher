const browser = require('webextension-polyfill');

import Couli from 'couli';

import './options/ui/components/history-tag/index';
import './options/ui/components/search-query/index';
import './options/ui/components/options/index';

import { onMessage } from './common/interaction';
import reactions from './options/reactions';

browser.runtime.onMessage.addListener((message) => onMessage(message, reactions));

const options = document.createElement('options');
document.body.appendChild(options);

Couli.apply('body');
