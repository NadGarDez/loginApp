import React from 'react';
import { useSelector } from 'react-redux';
import { useConfigureToken } from './hooks/auth/useConfigureToken';
import { authTokenSelector } from './reduxFiles/reducers/authTokenSlice';
import { LoginScreen } from './screens/LoginScreen/LoginScreen';
import { UserScreen } from './screens/UserScreen/UserScreen';

function App(): JSX.Element {
  const token = useSelector(authTokenSelector);
  console.log(token);

  useConfigureToken();

  return (
    <div className="App">
      {token !== null ? <UserScreen /> : <LoginScreen />}
    </div>
  );
}

export default App;
