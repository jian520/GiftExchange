/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//react-native bundle --entry-file index.js --platform ios --dev false --bundle-output release_ios/main.jsbundle --assets-dest release_ios/
