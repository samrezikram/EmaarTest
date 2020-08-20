/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Profile from './src/screens/Profile';
import {name as appName} from './app.json';
import { Navigation } from "react-native-navigation";

Navigation.registerComponent('Profile', () => Profile);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
        stack: {
            children: [
            {
                component: {
                name: 'Profile'
                }
            }  
            ]
        }
        }
    });
});