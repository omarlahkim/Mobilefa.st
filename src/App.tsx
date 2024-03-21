import React, {useEffect} from 'react';
import {Platform, useColorScheme} from 'react-native';
import Navigation from './navigation';
import {persistor, store} from './redux/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  MobileFastDarkTheme,
  MobileFastRNETheme,
  MobileFastTheme,
} from './themes/mobilefast';
import {ThemeProvider} from '@rneui/themed';
import Purchases from 'react-native-purchases';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
    let apiKey = '';
    switch (Platform.OS) {
      case 'ios':
        apiKey = 'YOUR_API_KEY';
        break;
      case 'android':
        apiKey = 'YOUR_API_KEY';
        break;
      default:
        apiKey = 'YOUR_API_KEY';
    }

    Purchases.configure({apiKey});
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={MobileFastRNETheme}>
          <Navigation
            theme={isDarkMode ? MobileFastDarkTheme : MobileFastTheme}
          />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
