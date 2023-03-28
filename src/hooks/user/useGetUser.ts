import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { authTokenSelector } from '../../reduxFiles/reducers/authTokenSlice';
import { type User } from '../../types/api';
import { getUser } from '../../utils/user';

interface UseUserHookType {
  loading: boolean;
  data: User;
  error: boolean;
  errorMessage: string;
  reload: () => Promise<void>;
}

export const useGetUser = (): UseUserHookType => {
  const token = useSelector(authTokenSelector);

  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [dataUser, setDataUser] = useState<User>({
    email: '',
    names: '',
    surnames: '',
    gender: '',
  });

  const [error, setError] = useState<{ error: boolean; errorMessage: string }>({
    error: false,
    errorMessage: '',
  });

  const apiUserCall = async (): Promise<void> => {
    if (!loadingUser) setLoadingUser(true);
    const results = await getUser(token ?? '');
    if (results.status !== 200) {
      setError({
        error: true,
        errorMessage: results.errorMessage ?? '',
      });
    }
    if (results.data !== undefined) {
      setDataUser(results.data);
    }
    setLoadingUser(false);
  };

  useEffect(() => {
    apiUserCall();
  }, []);

  return {
    data: dataUser,
    loading: loadingUser,
    reload: apiUserCall,
    ...error,
  };
};
