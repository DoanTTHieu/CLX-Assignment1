import React, { Component } from 'react';
import {
  View, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity,
  Dimensions, Image, TextInput
} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './component/Auth/SignIn';
import SettingScreen from './component/Main/Setting';
import OrdersScreen from './component/Main/Orders';
import ItemsScreen from './component/Main/Items/Items';
//import Menu from './screen/Menu';
import OdersHistory from './component/Menu/OdersHistory';
//import Header from './screen/Header';
import menu from './assets/menu.png';

const { height } = Dimensions.get('window');

StatusBar.setHidden(true);
const OdersStack = createStackNavigator();

function OdersStackScreen() {
  return (
    <OdersStack.Navigator >
      <OdersStack.Screen name="Oders" component={OrdersScreen} options={{ headerShown: false }} />
    </OdersStack.Navigator>
  );
}

const ItemsStack = createStackNavigator();

function ItemsStackScreen() {
  return (
    <ItemsStack.Navigator>
      <ItemsStack.Screen name="Items" component={ItemsScreen} options={{ headerShown: false }} />
    </ItemsStack.Navigator>
  );
}

const SettingStack = createStackNavigator();

function SettingStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Setting"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </SettingStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper} >
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
            <Image
              source={menu}
              style={{ width: 35, height: 35 }}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder='SEARCH'
          />
        </View>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Setting') {
                iconName = focused ? 'ios-settings' : 'ios-settings';
              } else if (route.name === 'Items') {
                iconName = focused ? 'ios-cafe' : 'ios-cafe';
              } else if (route.name === 'Oders') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          //style={{ justifyContent: 'center' }}
          tabBarOptions={{
          activeTintColor: '#f7c744',
          inactiveTintColor: '#203546',
        }}

        >
          <Tab.Screen name="Items" component={ItemsStackScreen} />
        <Tab.Screen name="Oders" component={OdersStackScreen} />
        <Tab.Screen name="Setting" component={SettingStackScreen} />
        </Tab.Navigator>
      </View>
    </SafeAreaView >
  );
}

const Stack = createStackNavigator();
function MenuDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Oders History" component={OdersHistory} />
    </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={MenuDrawer} />
          < Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(32,53,70)',
    flex: 1,
    flexDirection: 'column'
  },
  wrapper: {
    height: height / 15,
    backgroundColor: '#f7c744',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around'
  },
  textInput: {
    height: height / 25,
    width: 340,
    backgroundColor: '#FFF',
    paddingLeft: 10
  }
});

