const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const requests = {
  fetchTrending: [
    `/discover/tv?api_key=${API_KEY}&language=en-US&with_watch_providers=8&watch_region=US&sort_by=popularity.des`,
    `/discover/movie?api_key=${API_KEY}&language=en-US&with_watch_providers=8&watch_region=US&sort_by=popularity.des`,
  ],
  fetchNetflixOriginals: [
    `/discover/tv?api_key=${API_KEY}&witg_network=213&with_watch_providers=8&watch_region=US`,
    `/discover/movie?api_key=${API_KEY}&witg_network=213&with_watch_providers=8&watch_region=US`,
  ],
  fetchTopRated: [
    `/discover/tv?api_key=${API_KEY}&language=en-US&with_watch_providers=8&watch_region=US&sort_by=vote_average.desc&vote_count.gte=200`,
    `/discover/movie?api_key=${API_KEY}&language=en-US&with_watch_providers=8&watch_region=US&sort_by=vote_average.desc&vote_count.gte=200`,
  ],
  getTrailer: [`/movie/`, `/tv/`, `/videos?api_key=${API_KEY}`],
};

export default requests;
