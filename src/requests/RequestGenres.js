import shuffleArray from "../functions/shuffleArray";

let requestGenres = [
  {
    name: "ACTION",
    genreId: 28,
  },
  {
    name: "ANIMATION",
    genreId: 16,
  },
  {
    name: "ADVENTURE",
    genreId: 12,
  },
  {
    name: "COMEDY",
    genreId: 35,
  },
  {
    name: "CRIME",
    genreId: 80,
  },
  {
    name: "DOCUMENTARY",
    genreId: 99,
  },
  {
    name: "DRAMA",
    genreId: 18,
  },
  {
    name: "FAMILY",
    genreId: 10751,
  },
  {
    name: "FANTASY",
    genreId: 14,
  },
  {
    name: "HISTORY",
    genreId: 36,
  },
  {
    name: "HORROR",
    genreId: 27,
  },
  {
    name: "MUSIC",
    genreId: 10402,
  },
  {
    name: "MYSTERY",
    genreId: 9648,
  },
  {
    name: "ROMACE",
    genreId: 10749,
  },
  {
    name: "SCIENCE FICTION",
    genreId: 878,
  },
  {
    name: "TV MOVIE",
    genreId: 10770,
  },
  {
    name: "THRILLER",
    genreId: 53,
  },
  {
    name: "WAR",
    genreId: 10752,
  },
  {
    name: "WESTERN",
    genreId: 37,
  },
  {
    name: "ACTION AND ADVENTURE",
    genreId: 10759,
  },
  {
    name: "KIDS",
    genreId: 10762,
  },
  {
    name: "NEWS",
    genreId: 10763,
  },
  {
    name: "REALITY",
    genreId: 10764,
  },
  {
    name: "SCI-FI AND FANTASY",
    genreId: 10765,
  },
  {
    name: "SOAP",
    genreId: 10766,
  },
  {
    name: "TALK",
    genreId: 10767,
  },
  {
    name: "WAR AND POLITICS",
    genreId: 10768,
  },
];

requestGenres = shuffleArray(requestGenres);
export default requestGenres;
