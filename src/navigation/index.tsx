import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {navigationRef} from './services';
import {StatusBar} from 'react-native';
import LoggedInNavigator from './logged';
import UnLoggedNavigator from './unlogged';
import {RootState} from '../redux/store/store';
import {useSelector} from 'react-redux';

interface IProps {
  theme: Theme;
}

const Navigation: React.FC<IProps> = ({theme}: IProps) => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      {isLogged ? <LoggedInNavigator /> : <UnLoggedNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
