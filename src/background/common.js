export function has (str, substr) {
  return str.indexOf(substr) >= 0;
}

export const STRING_FILTERS = {
  '+url': (obj, str) => has(obj.url.toLowerCase(), str),
  '+title': (obj, str) => has(obj.title.toLowerCase(), str),
  '+urlortitle': (obj, str) => has(obj.title.toLowerCase(), str) || has(obj.url.toLowerCase(), str),
  '-url': (obj, str) => !has(obj.url.toLowerCase(), str),
  '-title': (obj, str) => !has(obj.title.toLowerCase(), str),
};

