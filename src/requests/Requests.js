const requests = {
  fetchTrending: {
    sort_by: "popularity.des",
  },
  fetchTopRated: {
    sort_by: "vote_average.desc",
    "vote_count.gte": 300,
  },
};

export default requests;
