const STATE = {
  currentPage: null,
  tab: null,
}

export default {
  currentPage,
  tabState,
}

function currentPage (num) {
  if (typeof num === 'undefined') {
    return STATE.currentPage;
  }

  return STATE.currentPage = num;
}

function tabState (tab) {
  if (tab) {
    STATE.tab = tab;
  }

  return STATE.tab;
}
