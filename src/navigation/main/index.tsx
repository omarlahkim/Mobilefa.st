import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {navigationRef} from '../services';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import LoggedInNavigator from './logged';
import UnLoggedNavigator from './unlogged';
import {RootState} from '../../redux/store/store';
import {useSelector} from 'react-redux';

interface IProps {
  theme: Theme;
}

const Navigation: React.FC<IProps> = ({theme}: IProps) => {
  const styling = styles(theme);
  // Get the isLogged state from the redux store
  const {isLogged, token} = useSelector((state: RootState) => state.auth);
  // Return the NavigationContainer with the theme and the UnLoggedNavigator or the LoggedInNavigator
  return (
    <SafeAreaView style={styling.container}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <StatusBar
          backgroundColor={theme.colors.background}
          barStyle={theme.dark ? 'light-content' : 'dark-content'}
        />
        {isLogged && token ? <LoggedInNavigator /> : <UnLoggedNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: theme.colors.background},
  });

export default Navigation;
