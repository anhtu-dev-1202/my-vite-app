import { call, put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, FETCH_USER_DETAIL_REQUEST } from './actions';
import { fetchUsersFromApi, fetchUserDetailFromApi } from '../../../services/userApi';
import { User } from './types';
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserDetailSuccess,
  fetchUserDetailFailure
} from './actions';

function* fetchUsersSaga() {
  try {
    const users: User[] = yield call(fetchUsersFromApi);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    const errorMessage = (error as Error).message || 'Unknown error';
    yield put(fetchUsersFailure(errorMessage));
  }
}

function* fetchUserDetailSaga(action: { type: string; payload: number }) {
  try {
    const userDetail: User = yield call(fetchUserDetailFromApi, action.payload);
    yield put(fetchUserDetailSuccess(userDetail));
  } catch (error) {
    const errorMessage = (error as Error).message || 'Unknown error';
    yield put(fetchUserDetailFailure(errorMessage));
  }
}

function* watchFetchUsersSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
}

function* watchFetchUserDetailSaga() {
  yield takeEvery(FETCH_USER_DETAIL_REQUEST, fetchUserDetailSaga);
}

export function* userSaga() {
  yield all([watchFetchUsersSaga(), watchFetchUserDetailSaga()]);
}
