const browser = require('webextension-polyfill');

const PROMISES_RESOLVES = {};

export function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => tabs[0]);
}

export function sendMessage (action, payload, tabId) {
  const { callbackId, promise } = payload.callbackId || saveCallback(action);
  const message = { action, callbackId, ...payload };
  
  if (window.__IS_BACKGROUND_SCRIPT__ && !payload.__TO_BACKGROUND__) {

    let getTabId = Promise.resolve(tabId);

    if (!tabId) {
      getTabId = getCurrentTab().then((tab) => tab.id);
    }

    getTabId.then((id) => {
      browser.tabs.sendMessage(id, { ...message, background: true });
    });
    
  } else {
    browser.runtime.sendMessage(message);
  }

  return promise;
}

export function sendMessageToTab (tabId, action, payload) {
  return sendMessage(action, payload, tabId);
}

export function sendMessageToBackground (action, payload) {
  return sendMessage(action, { ...payload, __TO_BACKGROUND__: true });
}

export function sendMessageFromBackground (action, payload) {
  return sendMessage(action, { ...payload , __FROM_BACKGROUND__: true,  __TO_BACKGROUND__: true });
}

export async function onMessage (message, actions = {}) {
  if (message.__TO_BACKGROUND__ && !window.__IS_BACKGROUND_SCRIPT__) {
    return;
  }

  if (message.isAnswer) {
    if (PROMISES_RESOLVES[message.callbackId]) {
      PROMISES_RESOLVES[message.callbackId](message);
      delete PROMISES_RESOLVES[message.callbackId];
    }
    return;
  }

  if (actions[message.action]) {
    const result = await actions[ message.action ](message);
    
    if (message.callbackId) {
      sendMessage(message.action, { callbackId: message.callbackId, isAnswer: true, ...result, __TO_BACKGROUND__: message.__FROM_BACKGROUND__ });
    }
  }
}

function saveCallback (action, cb) {
  const callbackId = Date.now() + Math.random() + action;

  return {
    promise: new Promise ((res) => PROMISES_RESOLVES[ callbackId ] = res),
    callbackId
  };
}
