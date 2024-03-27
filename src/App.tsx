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
import {LogLevel, OneSignal} from 'react-native-onesignal';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('f994a620-b918-4d57-9888-1838cc549843');

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });

  useEffect(() => {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
    let apiKey = '';
    switch (Platform.OS) {
      case 'ios':
        apiKey = 'appl_lSysoOtFMDDMiWKKYXsVAFbMOTP';
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
