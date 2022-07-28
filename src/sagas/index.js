import { takeLatest } from "redux-saga/effects";
import type from "../redux/type";
import { getAlbums } from "./albums";

function* rootSaga() {
  yield takeLatest(type.GET_ALBUMS_REQUESTED, getAlbums);
}

export default rootSaga;
