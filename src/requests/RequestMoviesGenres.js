import shuffleArray from "../functions/shuffleArray";
// //normaly API_KEY should be hidden
const API_KEY = "eb99eb0287033e0ff37b93fabaef3c62";
const region = "US";
const watchProviders = "8";
let requestMovieGenres = [
  {
    Name: "ACTION",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=28&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "ANIMATION",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=16&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "ADVENTURE",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=12&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "COMEDY",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "CRIME",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=80&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "DOCUMENTARY",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "DRAMA",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=18&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "FAMILY",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=10751&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "FANTASY",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=14&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "HISTORY",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=36&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "HORROR",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=27&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "MUSIC",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=10402&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "MYSTERY",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=9648&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "ROMACE",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=10749&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "SCIENCE FICTION",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=878&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "TV MOVIE",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=10770&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "THRILLER",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "WAR",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=10752&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
  {
    Name: "WESTERN",
    Url: [
      `/discover/movie?api_key=${API_KEY}&with_genres=37&with_watch_providers=${watchProviders}&watch_region=${region}`,
    ],
  },
];

requestMovieGenres = shuffleArray(requestMovieGenres);
export default requestMovieGenres;
