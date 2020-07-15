import { takeEvery, put, spawn } from 'redux-saga/effects';

import { Types as DucksTypes } from '../ducks/home';

import { getInfo } from '../../utils/mock/home';

function* getInfoHome({ payload }) {
  const response = yield getInfo;
  yield put({ type: 'SET_INFO_HOME', payload: { ...response } });
  return payload;
}

function* watchGetInfoHome() {
  yield takeEvery(DucksTypes.GET_INFO_HOME, getInfoHome);
}

export default function* init() {
  yield spawn(watchGetInfoHome);
}
