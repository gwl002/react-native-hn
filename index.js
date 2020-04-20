/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './dva';
import {name as appName} from './app.json';


console.customLog = console.log;

console.log = () => null



AppRegistry.registerComponent(appName, () => App);
