import { START_TIME_SIGN, EXACT_TIME_SIGN } from "../common/constants";
import { has, STRING_FILTERS } from './common';

export default parseRawOptions;

const EXTENSION_PREFIX = 'h';
export const SPACE_REGEXP = /\s+/g;
const DEFAULT_START = new Date(0);
const DEFAULT_END = new Date(9999, 11, 31);

const DIGITS_DATE_REGEXP = /^[><=][\/\:]?\d+/;
const DIGITS_WITH_LETTERS_DATE_REGEXP = /^[><=](\d+)([a-z]+)(\d{4})?$/;

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

const DAYS_IN_MONTH = 30;

const MONTHS_NAMES = ["jan", "feb", "mar", "arp", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const LAST_DAYS_OF_MONTHS = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const SORT_TYPES = ['date', 'visit', 'url', 'title']
const REAL_SORT_TYPES = []
  .concat( SORT_TYPES.map((type) =>  type + '>') )
  .concat( SORT_TYPES.map((type) =>  type[0] + '>') )
  .concat( SORT_TYPES.map((type) =>  type + '<') )
  .concat( SORT_TYPES.map((type) =>  type[0] + '<') );

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

    if (isDate(word)) {
      const [startDate, endDate] = createDateRange(word);
      options.timeFrames.push({ start: startDate, end: endDate });
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

function createDateRange (str) {
  const isStartTime = str[0] === START_TIME_SIGN;
  const isExactTime = str[0] === EXACT_TIME_SIGN;

  if (isWordingDate(str)) {
    const [, date, month, year] = DIGITS_WITH_LETTERS_DATE_REGEXP.exec(str);
    const monthNumber = MONTHS_NAMES.findIndex((monthName) =>
      month.toLowerCase().startsWith(monthName),
    );

    if (monthNumber === -1) {
      return [ createDateFromDistance(date, month), DEFAULT_END ];
    }

    if (isExactTime) {
      return [ createDateFromWords(date, monthNumber, year), createDateFromWords(date, monthNumber, year, true) ];
    } else if (isStartTime) {
      return [ createDateFromWords(date, monthNumber, year), DEFAULT_END ];
    } else {
      return [ DEFAULT_START, createDateFromWords(date, monthNumber, year, true) ];
    }

  } else {
    if (isExactTime) {
      return [ createDate(str, "start"), createDate(str, "end") ];
    } else if (isStartTime) {
      return [ createDate(str, "start"), DEFAULT_END ];
    } else {
      return [ DEFAULT_START, createDate(str, "end") ];
    }
  }
}

function createDateFromDistance (timeDistance, timeType) {
  const newDate = new Date();
  let daysDistance = 0;
  let monthsDistance = 0;
  let yearsDistance = 0;

  switch (timeType[0]) {
    case "y":
      yearsDistance = newDate.getFullYear() - timeDistance;
      break;

    case "m":
      [yearsDistance, monthsDistance] = normalizeDateDistance(newDate.getMonth(), timeDistance, LAST_DAYS_OF_MONTHS.length);
      break;

    case "w":
      timeDistance = timeDistance * 7;

    case "d":
      [monthsDistance, daysDistance] = normalizeDateDistance(newDate.getDate(), timeDistance, DAYS_IN_MONTH);
      [yearsDistance, monthsDistance] = normalizeDateDistance(newDate.getMonth(), monthsDistance, LAST_DAYS_OF_MONTHS.length);
      break;
  }

  newDate.setDate(newDate.getDate() - daysDistance);
  newDate.setFullYear(newDate.getFullYear() - yearsDistance);
  newDate.setMonth(newDate.getMonth() - monthsDistance);
  newDate.setUTCHours(0, 0, 0, 0);
  return newDate;
}

function normalizeDateDistance (currentTime, rawSubstractingTime, maxTime) {
  const wholeSubstractingParentTime = Math.floor(rawSubstractingTime / maxTime);
  const substractingTime = rawSubstractingTime % maxTime;

  return [currentTime > substractingTime]
    ? [wholeSubstractingParentTime, substractingTime]
    : [wholeSubstractingParentTime + 1, maxTime - substractingTime + currentTime];
}

function createDateFromWords (day, month, year, isEndOfDay) {
  const date = new Date();
  date.setDate(day);
  date.setMonth(month);
  if (year) {
    date.setFullYear(year);
  }

  if (isEndOfDay) {
    date.setUTCHours(23, 59, 59, 9999);
  } else {
    date.setUTCHours(0, 0, 0, 0);
  }

  return date;
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

function isDate (str) {
  return isWordingDate(str) || isDigitalDate(str);
}

function isWordingDate (str) {
  return DIGITS_WITH_LETTERS_DATE_REGEXP.test(str);
}

function isDigitalDate (str) {
  return DIGITS_DATE_REGEXP.test(str);
}

function isTag (str) {
  return /^!.*/.test(str);
}
