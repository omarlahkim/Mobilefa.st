import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {navigationRef} from './services';
import {SafeAreaView, StatusBar} from 'react-native';
import LoggedInNavigator from './logged';
import UnLoggedNavigator from './unlogged';
import {RootState} from '../redux/store/store';
import {useSelector} from 'react-redux';

interface IProps {
  theme: Theme;
}

const Navigation: React.FC<IProps> = ({theme}: IProps) => {
  // Get the isLogged state from the redux store
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  // Log the isLogged state when it changes
  React.useEffect(() => {
    console.log('isLogged', isLogged);
  }, [isLogged]);
  // Return the NavigationContainer with the theme and the UnLoggedNavigator or the LoggedInNavigator
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <StatusBar
          backgroundColor={theme.colors.background}
          barStyle={theme.dark ? 'light-content' : 'dark-content'}
        />
        {!isLogged ? <UnLoggedNavigator /> : <LoggedInNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;
