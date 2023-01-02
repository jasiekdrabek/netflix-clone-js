import shuffleArray from "./shuffleArray";
// //normaly API_KEY should be hidden
const API_KEY = "eb99eb0287033e0ff37b93fabaef3c62";
let requestGenres = [
  { Name: "ACTION", Url: [`/discover/movie?api_key=${API_KEY}&with_genres=28`] },
  {
    Name: "ANIMATION",
    Url: [`/discover/movie?api_key=${API_KEY}&with_genres=12`],
  },
  {
    Name: "ADVENTURE",
    Url: [`/discover/movie?api_key=${API_KEY}&with_genres=16`],
  },
  { Name: "COMEDY", Url: [`/discover/movie?api_key=${API_KEY}&with_genres=35`] },
  { Name: "CRIME", Url: [`/discover/movie?api_key=${API_KEY}&with_genres=80`] },
  {
    Name: "DOCUMENTARY",
    Url: [`/discover/movie?api_key=${API_KEY}&with_genres=99`],
  },
  { Name: "DRAMA", Url: [`/discover/movie?api_key=${API_KEY}&with_genres=18`] },
];

requestGenres = shuffleArray(requestGenres);
export default requestGenres;
//   export default requests;
// //   MOVIE
// // Action          28
// // Adventure       12
// // Animation       16
// // Comedy          35
// // Crime           80
// // Documentary     99
// // Drama           18
// // Family          10751
// // Fantasy         14
// // History         36
// // Horror          27
// // Music           10402
// // Mystery         9648
// // Romance         10749
// // Science Fiction 878
// // TV Movie        10770
// // Thriller        53
// // War             10752
// // Western         37
// TV SHOW
// Action & Adventure  10759
// Animation           16
// Comedy              35
// Crime               80
// Documentary         99
// Drama               18
// Family              10751
// Kids                10762
// Mystery             9648
// News                10763
// Reality             10764
// Sci-Fi & Fantasy    10765
// Soap                10766
// Talk                10767
// War & Politics      10768
// Western             37
