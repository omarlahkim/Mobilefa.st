import React from 'react';
import {useColorScheme} from 'react-native';
import Navigation from './navigation';
import {persistor, store} from './redux/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {MobileFastDarkTheme, MobileFastTheme} from './themes/mobilefast';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation
          theme={isDarkMode ? MobileFastDarkTheme : MobileFastTheme}
        />
      </PersistGate>
    </Provider>
  );
}
export default App;
