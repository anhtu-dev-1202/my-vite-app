import { User } from './types';

// Action Types
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const FETCH_USER_DETAIL_REQUEST = 'FETCH_USER_DETAIL_REQUEST';
export const FETCH_USER_DETAIL_SUCCESS = 'FETCH_USER_DETAIL_SUCCESS';
export const FETCH_USER_DETAIL_FAILURE = 'FETCH_USER_DETAIL_FAILURE';

// Action Creators
interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

interface FetchUserDetailRequestAction {
  type: typeof FETCH_USER_DETAIL_REQUEST;
  payload: number;
}

interface FetchUserDetailSuccessAction {
  type: typeof FETCH_USER_DETAIL_SUCCESS;
  payload: User;
}

interface FetchUserDetailFailureAction {
  type: typeof FETCH_USER_DETAIL_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction
  | FetchUserDetailRequestAction
  | FetchUserDetailSuccessAction
  | FetchUserDetailFailureAction;

// Action Creators
export const fetchUsersRequest = (): FetchUsersRequestAction => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users: User[]): FetchUsersSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error: string): FetchUsersFailureAction => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});

export const fetchUserDetailRequest = (userId: number): FetchUserDetailRequestAction => ({
  type: FETCH_USER_DETAIL_REQUEST,
  payload: userId
});

export const fetchUserDetailSuccess = (user: User): FetchUserDetailSuccessAction => ({
  type: FETCH_USER_DETAIL_SUCCESS,
  payload: user
});

export const fetchUserDetailFailure = (error: string): FetchUserDetailFailureAction => ({
  type: FETCH_USER_DETAIL_FAILURE,
  payload: error
});
