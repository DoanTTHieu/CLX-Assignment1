import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import MenuDrawer from './component/Main/MenuDrawer';

StatusBar.setHidden(true);
//const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MenuDrawer />
      </NavigationContainer>
    );
  }
}

