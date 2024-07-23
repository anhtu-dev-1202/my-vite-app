import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

// then run the saga
sagaMiddleware.run(rootSaga);

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];

export default store;
