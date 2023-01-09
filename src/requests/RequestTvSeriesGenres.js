import shuffleArray from "../functions/shuffleArray";
let requestTvSeriesGenres = [
  {
    name: "ANIMATION",
    genreId: 16,
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
    name: "MYSTERY",
    genreId: 9648,
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

requestTvSeriesGenres = shuffleArray(requestTvSeriesGenres);
export default requestTvSeriesGenres;
