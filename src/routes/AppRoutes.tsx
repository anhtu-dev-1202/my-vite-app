import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import userRoutes from './UserRoutes';
import { redirectIfUser, logoutUser } from '../utils/authUtils';
import About from '../containers/About';
import Auth from '../containers/auth/Auth';
import App from '../App';
import NavBar from '../components/NavBar';

const routes = createRoutesFromElements(
  <>
    <Route path='/' element={<NavBar />}>
      <Route index element={<App />} />
      <Route path='about' element={<About />} />
      <Route>
        <Route path='login' element={<Auth />} loader={redirectIfUser} />
        <Route path='logout' action={logoutUser} />
      </Route>
      {userRoutes}
    </Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
