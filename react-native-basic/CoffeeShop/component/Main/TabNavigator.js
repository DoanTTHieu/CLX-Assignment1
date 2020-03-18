import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, 
    StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SettingScreen from './Setting';
import OrdersScreen from './Orders';
import ItemsScreen from './Items/Items';
import menu from '../../assets/Others/menu.png';

const { height } = Dimensions.get('window');

const OdersStack = createStackNavigator();
function OdersStackScreen() {
    return (
        <OdersStack.Navigator >
            <OdersStack.Screen
                name="Oders"
                component={OrdersScreen}
                options={{ headerShown: false }}
            />
        </OdersStack.Navigator>
    );
}

const ItemsStack = createStackNavigator();
function ItemsStackScreen() {
    return (
        <ItemsStack.Navigator>
            <ItemsStack.Screen
                name="Items" component={ItemsScreen}
                options={{ headerShown: false }}
            />
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
export default class TabNavigator extends Component {
    render() {
        return (
            // <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>

                <View style={styles.wrapper} >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                    >
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
            // </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
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
    },
    container: {
        backgroundColor: 'rgb(32,53,70)',
        flex: 1,
        flexDirection: 'column'
    }    
  });
