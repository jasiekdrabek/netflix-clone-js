import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    movieList: null,
    region: null,
    watchProvider: null,
    avatar: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    getMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    getRegion: (state, action) => {
      state.region = action.payload;
    },
    getWatchProvider: (state, action) => {
      state.watchProvider = action.payload;
    },
    getAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.movieList = null;
      state.region = null;
      state.watchProvider = null;
      state.avatar = null;
    },
  },
});
export const {
  login,
  logout,
  getMovieList,
  getAvatar,
  getRegion,
  getWatchProvider,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectMovieList = (state) => state.user.movieList;

export const selectAvatar = (state) => state.user.avatar;

export const selectRegion = (state) => state.user.region;

export const selectWatchProvider = (state) => state.user.watchProvider;
export default userSlice.reducer;
