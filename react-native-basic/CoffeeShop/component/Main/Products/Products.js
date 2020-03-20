import React from 'react';
import { } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsView from './ProductsView';
import ProductDetail from './ProductDetail';

const Stack = createStackNavigator();

export default class ProductsScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="ProductsView" >
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
        <Stack.Screen
         name='ProductsView' 
         component={ProductsView} 
         options={{ headerShown: false }} 
         navigation={this.props.navigation} 
        />
      </Stack.Navigator>
    );
  }
}
