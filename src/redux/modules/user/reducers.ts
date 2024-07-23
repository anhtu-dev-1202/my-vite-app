import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_DETAIL_REQUEST,
  FETCH_USER_DETAIL_SUCCESS,
  FETCH_USER_DETAIL_FAILURE,
  UserActionTypes
} from './actions';
import { UserState } from './types';

const initialState: UserState = {
  users: [],
  userDetail: null,
  loading: false,
  error: null
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case FETCH_USERS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case FETCH_USER_DETAIL_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_DETAIL_SUCCESS:
      return { ...state, userDetail: action.payload, loading: false };
    case FETCH_USER_DETAIL_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default userReducer;
