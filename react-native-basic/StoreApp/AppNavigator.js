import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Category from './screens/Category';
import Categories from './screens/Categories';
import CartScreen from './screens/Cart';
import OdersScreen from './screens/Orders';
import SettingsScreen from './screens/Settings';


const CategoryStack = createStackNavigator();

function CategoryStackScreen() {  
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Home" component={Categories} options = {{title: 'My home'}} />
      <CategoryStack.Screen name="Category" component={Category} options = {({ route }) => ({ title: route.params.categoryName })}/>
    </CategoryStack.Navigator>
  );
}

const OdersStack = createStackNavigator();

function OdersStackScreen() {  
  return (
    <OdersStack.Navigator>
      <OdersStack.Screen name= "Oders" component={OdersScreen} />
    </OdersStack.Navigator>
  );
}

const CartStack = createStackNavigator();

function CartStackScreen() {  
  return (
    <CartStack.Navigator>
      <CartStack.Screen name= "Cart" component={CartScreen} />
    </CartStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {  
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name= "Setting" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function AppNavigator() {  
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Category" component={CategoryStackScreen} />
      <Tab.Screen name = "Cart" component={CartStackScreen} />
      <Tab.Screen name = "Oders" component={OdersStackScreen}/>
      <Tab.Screen name = "Setting" component={SettingsStackScreen}/>
    </Tab.Navigator>
  );
}

export default AppNavigator;