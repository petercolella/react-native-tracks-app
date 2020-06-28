import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const navigator = createStackNavigator(
  {
    Signin: SigninScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Signin',
    defaultNavigationOptions: {
      title: 'Tracks'
    }
  }
);

const App = createAppContainer(navigator);

export default App;
