import React from 'react';
import { StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  }
});
