import axios from 'axios';
import { User } from '../redux/modules/user/types';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchUsersFromApi = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/users');
  return response.data;
};

export const fetchUserDetailFromApi = async (userId: number): Promise<User> => {
  const response = await api.get<User>(`/users/${userId}`);
  return response.data;
};
