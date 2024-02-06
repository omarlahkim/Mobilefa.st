import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import Navigation from './navigation';
import {Theme} from '@react-navigation/native';
import {persistor, store} from './store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

interface IProps {
  theme: Theme;
}

function App(props: IProps): JSX.Element {
  const {theme} = props;
  const isDarkMode = useColorScheme() === 'dark';
  const style = {
    flex: 1,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={style}>
          <Navigation theme={theme} />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
