import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Category from './screens/Category';
import Categories from './screens/Categories';


const Stack = createStackNavigator();

function AppNavigator() {  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Categories} options = {{title: 'My home'}} />
      <Stack.Screen name="Category" component={Category} options = {({ route }) => ({ title: route.params.categoryName })}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;