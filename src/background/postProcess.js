import { STRING_FILTERS } from './common';

export default postProcess;

function postProcess (results, options) {
  const filteredResults = filterResults(results, options);
  const sortedResults = sortResults(filteredResults, options.sort);
  return sortedResults;
}

function filterResults (results, options) {

  for (let key in options) {
    if (STRING_FILTERS[key]) {
      const strings = options[key];
      strings.forEach((string) => {
        results = results.filter((obj) => STRING_FILTERS[key](obj, string.toLowerCase()));
      });
    }
  }

  return results;
}

function sortResults (results, sortRules) {
  let orderedResults = results;

  sortRules.forEach((rule) => {

    switch (rule) {
      case 'u>':
      case 'url>':
        orderedResults.sort((a, b) => compareObjectStrings(a, b, "url"));
        break;
      case 'u<':
      case 'url<':
        orderedResults.sort((a, b) => compareObjectStrings(b, a, "url"));
        break;
      case 't>':
      case 'title>':
        orderedResults.sort((a, b) => compareObjectStrings(a, b, "title"));
        break;
      case 't<':
      case 'title<':
        orderedResults.sort((a, b) => compareObjectStrings(b, a, "title"));
        break;
      case 'd>':
      case 'date>':
        orderedResults.sort((a, b) => a.lastVisitTime - b.lastVisitTime);
        break;
      case 'd<':
      case 'date<':
        orderedResults.sort((a, b) => b.lastVisitTime - a.lastVisitTime);
        break;
      case 'v>':
      case 'visit>':
        orderedResults.sort((a, b) => a.visitCount - b.visitCount);
        break;
      case 'v<':
      case 'visit<':
        orderedResults.sort((a, b) => b.visitCount - a.visitCount);
        break;
    }

  });

  return orderedResults;
}

function compareObjectStrings (a, b, key) {
  return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
}
