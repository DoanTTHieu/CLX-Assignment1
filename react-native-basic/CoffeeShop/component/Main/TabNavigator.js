import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, 
    StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ContactScreen from './Contact/Contact';
import OrdersScreen from './Orders/Orders';
import ProductsScreen from './Products/Products';
import menu from '../../assets/Others/menu.png';

const { height, width } = Dimensions.get('window');

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

const ProductsStack = createStackNavigator();
function ProductsStackScreen() {
    return (
        <ProductsStack.Navigator>
            <ProductsStack.Screen
                name="Products" component={ProductsScreen}
                options={{ headerShown: false }}
            />
        </ProductsStack.Navigator>
    );
}

const ContactStack = createStackNavigator();
function ContactStackScreen() {
    return (
        <ContactStack.Navigator>
            <ContactStack.Screen
                name="Contact"
                component={ContactScreen}
                options={{ headerShown: false }}
            />
        </ContactStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
export default class TabNavigator extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.wrapper} >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                    >
                        <Image
                            source={menu}
                            style={{ width: 30, height: 30 }}
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
                            if (route.name === 'Contact') {
                                iconName = focused ? 'md-person' : 'md-person';
                            } else if (route.name === 'Products') {
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
                    <Tab.Screen name="Products" component={ProductsStackScreen} />
                    <Tab.Screen name="Oders" component={OdersStackScreen} />
                    <Tab.Screen name="Contact" component={ContactStackScreen} />
                </Tab.Navigator>
            </View>
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
      width: width * 0.8,
      backgroundColor: '#FFF',
      paddingLeft: 10
    },
    container: {
        backgroundColor: 'rgb(32,53,70)',
        flex: 1,
        flexDirection: 'column'
    }    
  });
