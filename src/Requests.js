//normaly API_KEY should be hidden
const API_KEY = "eb99eb0287033e0ff37b93fabaef3c62";
const requests = {
  fetchTrending: [`/discover/tv?api_key=${API_KEY}&language=en-US&with_watch_providers=8&watch_region=US&sort_by=popularity.des`,
  `/discover/movie?api_key=${API_KEY}&language=en-US&with_watch_providers=8&watch_region=US&sort_by=popularity.des`],
  fetchNetflixOriginals: [
    `/discover/tv?api_key=${API_KEY}&witg_network=213`,
    `/discover/movie?api_key=${API_KEY}&witg_network=213`,
  ],
  fetchTopRated: [
    `/discover/movie?api_key=${API_KEY}&language=en-US&with_watch_providers=8&watch_region=US&sort_by=vote_average.desc&vote_count.gte=200`,
    `/discover/tv?api_key=${API_KEY}&language=en-US&with_watch_providers=8&watch_region=US&sort_by=vote_average.desc&vote_count.gte=200`,
  ],
};

export default requests;
