import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem,
  DrawerItemList } from '@react-navigation/drawer'; 

import OdersHistory from '../Menu/OdersHistory';
//import ChangeInfo from '../Menu/ChangeInfo';
import account from '../../assets/Others/account.png';
import TabNavigator from './TabNavigator';
import SignIn from '../Auth/SignIn';

class CustomDrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { container, profile, btnStyle, btnText, logInContainer, txtUsername } = styles;
    const logOutJSX = (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={btnStyle}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
    const logInJSX = (
      <View style={logInContainer} >
        <Text style={txtUsername}>USERNAME</Text>
        <DrawerContentScrollView {...this.props}>
          <DrawerItemList {...this.props} labelStyle={{ fontSize: 18 }} />
          <DrawerItem label="Sign out" labelStyle={{ fontSize: 18 }} />
        </DrawerContentScrollView>
      </View>
    );

    const mainJSXView = this.props.getLoginState ? logInJSX : logOutJSX;
    return (
      <View style={container}>
        <Image source={account} style={profile} />
        {mainJSXView}
      </View>
    );
  }
}

const Drawer = createDrawerNavigator();
// eslint-disable-next-line react/no-multi-comp
export default class MenuDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: true,
    };
  }

  render() {
    const logedIn = (
      //<Drawer.Screen name="Change Information" component={ChangeInfo} />
      <Drawer.Screen name="Oders History" component={OdersHistory} />
    );

    const logedOut = (
      <Drawer.Screen name="Login" component={SignIn} />
    );
    const mainJSX = this.state.isLogedIn ? logedIn : logedOut;

    return (
      <View style={{ flex: 1 }} >
        <Drawer.Navigator
          drawerContent={(props) => 
            <CustomDrawerContent {...props} getLoginState={this.state.isLogedIn} />}
          initialRouteName="Home"
          drawerStyle={{
            backgroundColor: '#f7c744',
            width: 240,
          }}
        >
          <Drawer.Screen name="Home" component={TabNavigator} />
          {mainJSX}
        </Drawer.Navigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  customStyle: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f7c744',
    alignItems: 'center',
    paddingTop: 100
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 5
  },
  btnStyle: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 70
  },
  btnText: {
    color: '#203546',
    fontSize: 20
  },
  logInContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txtUsername: {
    color: '#203546',
    fontFamily: 'Avenir'
  }
});
