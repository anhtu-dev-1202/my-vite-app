import { redirect } from 'react-router-dom';

export const redirectIfUser = async () => {
  const token = localStorage.getItem('token');

  if (token) {
    return redirect('/');
  }

  return null;
};

export const logoutUser = async () => {
  localStorage.removeItem('token');
  return redirect('/login');
};
