import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ForgotPassword from 'app/screens/ForgotPassword';

import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';

const Stack = createStackNavigator();

const LoggedInStack = createStackNavigator();


interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={LoggedInNavigator}
            options={homeOptions}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;