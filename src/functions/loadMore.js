const loadMore = (
  records,
  requestGenres,
  setHasMore,
  itemsPerPage,
  setrecords
) => {
  if (typeof setrecords != "function" || typeof setHasMore != "function") {
    return;
  }
  if (records >= requestGenres?.length) {
    setHasMore(false);
  } else {
    var limit = [
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
    ];
    if (window.scrollY >= limit[0] - limit[2] - 300) {
      setTimeout(() => {
        setrecords(records + itemsPerPage);
      }, 500);
    }
  }
};

export default loadMore;
