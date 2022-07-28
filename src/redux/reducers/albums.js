import type from "../type";

const initialState = {
  fetchingAlbums: false,
  albumsList: [],
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ALBUMS_REQUESTED:
      return { ...state, fetchingAlbums: true };
    case type.GET_ALBUMS_SUCCEEDED:
      console.log("reducer data", action.payload);
      return {
        ...state,
        albumsList: action.payload,
        fetchingAlbums: false,
      };
    case type.GET_ALBUMS_FAILED:
      return { ...state, fetchingAlbums: false };
    default:
      return state;
  }
};
export default albums;
