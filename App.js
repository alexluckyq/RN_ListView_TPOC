
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Demo from './src/Demo'
import Detail from './src/Detail'

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const RootStackNavigator = createStackNavigator(
  {
    ListActivity: Demo,
    
    DetailActivity: Detail
  },
  {initialRouteName: 'ListActivity',}
  );

const AppContainer = createAppContainer(RootStackNavigator);



  // const AppNavigation = () => (
  //   <SimpleAppNavigator />
  // );

AppRegistry.registerComponent('App', () => App);