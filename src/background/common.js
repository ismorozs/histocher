export function has (str, substr) {
  return str.indexOf(substr) >= 0;
}

export const STRING_FILTERS = {
  "+url": (obj, str) => obj.url.toLowerCase().includes(str),
  "+title": (obj, str) =>
    obj.title !== null && obj.title.toLowerCase().includes(str),
  "+urlortitle": (obj, str) =>
    (obj.title !== null && obj.title.toLowerCase().includes(str)) ||
    has(obj.url.toLowerCase(), str),
  "-url": (obj, str) => !obj.url.toLowerCase().includes(str),
  "-title": (obj, str) =>
    obj.title !== null && !obj.title.toLowerCase().includes(str),
};

export const SPECIAL_PAGES = {
  'settings': '/options/options.html',
  'help': '/help/help.html',
};
