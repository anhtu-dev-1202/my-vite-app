import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '@/assets/styles/navBar.scss';

const NavBar: React.FC = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h1 className='navbar-logo'>MyApp</h1>
          <ul className='navbar-menu'>
            <li className='navbar-item'>
              <Link to='/' className='navbar-link'>
                Home
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/about' className='navbar-link'>
                About
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/login' className='navbar-link'>
                Login
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/users' className='navbar-link'>
                User
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/logout' className='navbar-link'>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='main-content'>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
