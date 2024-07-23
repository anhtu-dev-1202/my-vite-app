import React from 'react';
import { Route } from 'react-router-dom';
import UserList from '../containers/users/UserList';
import UserDetail from '../containers/users/UserDetail';

const userRoutes = (
  <>
    <Route path='/users' element={<UserList />} />
    <Route path='/users/:id' element={<UserDetail />} />
  </>
);

export default userRoutes;
