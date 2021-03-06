import React from 'react';
import { } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import OdersView from './OdersView';
import ProductDetail from '../Products/ProductDetail';

const Stack = createStackNavigator();

export default class OdersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Stack.Navigator initialRouteName="OdersView" >
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
        <Stack.Screen
         name='OdersView' 
         component={OdersView} 
         options={{ headerShown: false }} 
         navigation={this.props.navigation} 
         ordersArray={this.props.ordersArray}
        />
      </Stack.Navigator>
    );
  }
}
