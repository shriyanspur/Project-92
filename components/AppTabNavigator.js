import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator(
  {
    Request: {
      screen: RequestScreen,
      navigationOptions: {
        tabBarLabel: 'Request'
      }
    },
    Donate: {
      screen: DonateScreen,
      navigationOptions: {
        tabBarLabel: 'Donate'
      }
    },
  }
)