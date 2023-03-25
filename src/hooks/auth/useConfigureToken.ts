import { useEffect } from 'react';
import { getCookie } from '../../utils/cookies';
import { useDispatch, useSelector } from 'react-redux';
import {
  isLoadingTokenSelector,
  setLoading,
  setToken,
} from '../../reduxFiles/reducers/authTokenSlice';

export const useConfigureToken = (): void => {
  const dispatch = useDispatch();
  const loadingToken = useSelector(isLoadingTokenSelector);

  useEffect(() => {
    const token = getCookie(document.cookie, 'login_app_cookie');
    if (token !== undefined) {
      console.log('aca');
      dispatch(setToken(token));
    }
    dispatch(setLoading(false));
  }, [loadingToken]);
};
