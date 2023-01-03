//normaly API_KEY should be hidden
const API_KEY = "eb99eb0287033e0ff37b93fabaef3c62";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&with_watch_providers=8`,
  fetchNetflixOriginals: [
    `/discover/tv?api_key=${API_KEY}&witg_network=213`,
    `/discover/movie?api_key=${API_KEY}&witg_network=213`,
  ],
  fetchTopRated: [
    `/movie/top_rated?api_key=${API_KEY}&language=en-US&with_watch_providers=8`,
    `/tv/top_rated?api_key=${API_KEY}&language=en-US&with_watch_providers=8`,
  ],
};

export default requests;
