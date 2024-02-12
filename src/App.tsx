import React from 'react';
import {useColorScheme} from 'react-native';
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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

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
