import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import Navigation from './navigation';
import {Theme} from '@react-navigation/native';
import {persistor, store} from './redux/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {MobileFastDarkTheme, MobileFastTheme} from './themes/mobilefast';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <Navigation
            theme={isDarkMode ? MobileFastDarkTheme : MobileFastTheme}
          />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
