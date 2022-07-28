import type from "../redux/type";
import axios from "axios";
import { put } from "redux-saga/effects";
export function* getAlbums(action) {
  try {
    const albumsList = yield axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    )
    console.log("api data hit in saga", albumsList),
      yield put({ type: type.GET_ALBUMS_SUCCEEDED, payload: albumsList.data });
  } catch (error) {
    console.log("fetch albums error: ", error);
    yield put({ type: type.GET_ALBUMS_FAILED });
  }
}