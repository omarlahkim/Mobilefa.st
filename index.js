/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import './src/translations/index';
import {init} from '@amplitude/analytics-react-native';
import {Settings} from 'react-native-fbsdk-next';

// Initialize Amplitude
init('c3eb62d93cd1d915609bfd0afb0f7471');
//Initialize Facebook
Settings.setAppID('1328949311117779');
Settings.initializeSDK();

AppRegistry.registerComponent(appName, () => App);
