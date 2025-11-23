const browser = require("webextension-polyfill");

import reactions from "./reactions";

export async function setupContextMenu() {
  await browser.contextMenus.removeAll();
  browser.contextMenus.create({
    id: "1",
    title: "Search history",
    contexts: ["all"],
  });
}

export function onContextMenuClicked(info) {
  reactions.openPage({ url: "settings" });
}
