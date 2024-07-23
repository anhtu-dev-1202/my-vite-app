import { AppDispatch, RootState } from '../../redux/store';
import { fetchUsersRequest, fetchUserDetailRequest } from '../../redux/modules/user/actions';
import { useAppDispatch, useAppSelector } from '../hooks';

const useUser = () => {
  const dispatch = useAppDispatch<AppDispatch>();
  const users = useAppSelector((state: RootState) => state.user.users);
  const userDetail = useAppSelector((state: RootState) => state.user.userDetail);
  const loading = useAppSelector((state: RootState) => state.user.loading);
  const error = useAppSelector((state: RootState) => state.user.error);

  const fetchUsers = () => {
    dispatch(fetchUsersRequest());
  };

  const fetchUserDetail = (userId: number) => {
    dispatch(fetchUserDetailRequest(userId));
  };

  return {
    users,
    userDetail,
    loading,
    error,
    fetchUsers,
    fetchUserDetail
  };
};

export default useUser;
