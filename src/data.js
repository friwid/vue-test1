const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

export default {
  getAllPage() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  }
}