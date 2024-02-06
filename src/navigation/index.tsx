import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {navigationRef} from './services';
import {StatusBar} from 'react-native';
import LoggedInNavigator from './logged';
import UnLoggedNavigator from './unlogged';

interface IProps {
  theme: Theme;
}

const Navigation: React.FC<IProps> = ({theme}: IProps) => {
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      {token ? <LoggedInNavigator /> : <UnLoggedNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
