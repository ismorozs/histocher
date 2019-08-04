import { has, STRING_FILTERS } from './common';

export default parseRawOptions;

const EXTENSION_PREFIX = 'h';
const SPACE_REGEXP = /\s+/g;
const DEFAULT_START = new Date(0);
const DEFAULT_END = new Date(9999, 11, 31);

const DATE_REGEXPS = [
  { type: 'FullYear', regexp: /\/(\d{4})\// },
  { type: 'Month', regexp: /\/(\d{1,2})\// },
  { type: 'Date', regexp: /^(?!\/)(\d{1,2})\// },
  { type: 'Hours', regexp: /(\d{1,2})\:/ },
  { type: 'Minutes', regexp: /\:(\d{1,2})/ },
];

const DATE_TYPES = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes'];

const TIME_FRAMES = {
  FullYear: { start: () => 0, end: () => 9999 },
  Month: { start: () => 0, end: () => 11 },
  Date: { start: () => 1, end: getLastDayOfMonth },
  Hours: { start: () => 0, end: () => 23 },
  Minutes: { start: () => 0, end: () => 59 },
};

const LAST_DAYS_OF_MONTHS = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const SORT_TYPES = ['date', 'visit', 'url', 'title']
const REAL_SORT_TYPES = []
  .concat( SORT_TYPES.map((type) => '>' + type) )
  .concat( SORT_TYPES.map((type) => '>' + type[0]) )
  .concat( SORT_TYPES.map((type) => '<' + type) )
  .concat( SORT_TYPES.map((type) => '<' + type[0]) );

function parseRawOptions (rawString) {
  const rawOptions = rawString.split(SPACE_REGEXP).filter((str) => !!str);
  const options = { base: [], timeFrames: [], sort: [], tags: [], query: rawString, fullQuery: EXTENSION_PREFIX + ' ' + rawString };
  parseOptions(rawOptions, options, 'base');
  flattenTimes (options);

  if (!options.timeFrames.length) {
    options.timeFrames.push({ start: DEFAULT_START, end: DEFAULT_END });
  }

  if (options.tags.length) {
    options['+urlortitle'] = (options['+urlortitle'] || []).concat( options.base );
  }

  return options;
}

function parseOptions (rawOptions, options, curOption) {
  for (let i = 0; i < rawOptions.length; i++) {
    const word = rawOptions[i];
    
    if (isExactDate(word)) {
      options.timeFrames.push({ start: createDate(word, 'start'), end: createDate(word, 'end') });
      continue;
    }

    if (isStartDate(word)) {
      options.timeFrames.push({ start: createDate(word, 'start'), end: DEFAULT_END });
      continue;
    }

    if (isEndDate(word)) {
      options.timeFrames.push({ start: DEFAULT_START, end: createDate(word, 'end') });
      continue;
    }

    if (has(REAL_SORT_TYPES, word)) {
      options.sort.push(word);
      continue;
    }

    if (isTag(word)) {
      options.tags.push( word.slice(1) );
      continue;
    }

    if (STRING_FILTERS[word]) {
      if (!options[word]) {
        options[word] = [];
      }

      return parseOptions(rawOptions.slice(i + 1), options, word);
    }

    options[curOption].push(word);
  }
}

function flattenTimes (options) {
  const flattenedTimes = [];

  let cur;
  let next;
  for (let i = 0; i < options.timeFrames.length; i++) {
    cur = options.timeFrames[i];
    next = options.timeFrames[i + 1];

    if (next && cur.start < next.start && cur.end > next.start && cur.end < next.end) {
      options.timeFrames[i + 1] = { start: next.start, end: cur.end };
      continue;
    }

    if (next && cur.end > next.end && cur.start < next.end && cur.start > next.start) {
      options.timeFrames[i + 1] = { start: cur.start, end: next.end };
      continue;
    }

    if (next && cur.start < next.start && cur.end > next.end) {
      options.timeFrames[i + 1] = cur;
      continue;
    }

    if (next && cur.start > next.start && cur.end < next.end) {
      continue;
    }

    flattenedTimes.push(cur);
  }

  options.timeFrames = flattenedTimes;
}

function createDate (dateArg, borderType) {
  const dateStr = dateArg.slice(1);
  const date = new Date();
  let autoSetDateStartIdx = 0;
  
  DATE_REGEXPS.forEach((test) => {
    const match = test.regexp.exec(dateStr);
    
    if (match) {
      let number = match[1];
      autoSetDateStartIdx = DATE_TYPES.indexOf(test.type) + 1;
      
      if (test.type === 'Month') {
        number--;
      }

      date['set' + test.type](number);
    }

  });

  DATE_TYPES.slice(autoSetDateStartIdx).forEach((dateType) =>
    date['set' + dateType](TIME_FRAMES[dateType][borderType](date)));

  return date;
}

function getLastDayOfMonth (date) {
  const month = date.getMonth();

  if (month !== 1) {
    return LAST_DAYS_OF_MONTHS[month];
  }

  return LAST_DAYS_OF_MONTHS[month][ isLeapYear(date.getFullYear()) ];
}

function isLeapYear (year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return 1;
  }

  return 0;
}

function isExactDate (str) {
  return /^\=[\/\:]?\d+/.test(str);
}

function isStartDate (str) {
  return /^\+[\/\:]?\d+/.test(str);
}

function isEndDate (str) {
  return /^\-[\/\:]?\d+/.test(str);
}

function isTag (str) {
  return /^!.*/.test(str);
}
