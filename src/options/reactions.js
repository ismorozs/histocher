import Store from './store';

export default {
  getData
};

function getData (data) {
  Store.saveData(data);
}
