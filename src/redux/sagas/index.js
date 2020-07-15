import { all } from 'redux-saga/effects';
import init from './home';
import menu from './menu';

export default function* rootSaga() {
  yield all([init(), menu()]);
}
