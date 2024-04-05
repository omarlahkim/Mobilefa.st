import React from 'react';
import {Login, SignUp} from '../../../screens';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/store';
import EmailLogin from 'src/screens/login/Email';
import {AuthStack} from 'src/navigation/stacks';
import {authStackOptions} from 'src/navigation/options';

const UnLoggedNavigator = () => {
  // Get the isLogged state from the redux store
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const options = authStackOptions(isLogged);
  // Return the stack navigator with authentication screens
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} options={options} />
      <AuthStack.Screen
        name="EmailLogin"
        component={EmailLogin}
        options={options}
      />
      <AuthStack.Screen name="SignUp" component={SignUp} options={options} />
    </AuthStack.Navigator>
  );
};

export default UnLoggedNavigator;
