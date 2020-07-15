import { takeEvery, put, spawn } from 'redux-saga/effects';

import { Types as DucksTypes } from '../ducks/menu';

import { getLinkUser } from '../../utils/mock/menu';

function* getAccess({ payload }) {
  const response = yield getLinkUser;
  yield put({ type: 'ENABLE_ACCESS', payload: { access: response } });
  return payload;
}

function* watchGetAccess() {
  yield takeEvery(DucksTypes.GET_ACCESS, getAccess);
}

export default function* menu() {
  yield spawn(watchGetAccess);
}
