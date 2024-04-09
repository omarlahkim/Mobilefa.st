import {NavigationContainer, Theme} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {navigationRef} from '../services';
import LoggedInNavigator from './logged';
import UnLoggedNavigator from './unlogged';

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
