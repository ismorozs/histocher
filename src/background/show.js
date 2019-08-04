import Search from './search';
import Message from './messages';
import State from './state';

export default function showResults (opts) {
  State.getResultsPage(opts.tabId, opts.pageNum)
    .then((list) => Search.visitsForHistory(list, opts)
    .then((listWithVisits) => Message.buildPage(opts.tabId, listWithVisits, opts.pageNum + 1)))
}
