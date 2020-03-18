import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList } from '@react-navigation/drawer';
import OdersHistory from '../Menu/OdersHistory';
import ChangeInfo from '../Menu/ChangeInfo';
import account from '../../assets/Others/account.png';
import TabNavigator from './TabNavigator';

class CustomDrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogedin: true,
    };
  }

  render() {
    const { container, profile, btnStyle, btnText } = styles;
    const logoutJSX = (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={btnStyle}>
          <Text style={btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
    const loginJSX = (
      <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} >
        <Text style={{ color: '#203546', fontFamily: 'Avenir' }}>USERNAME</Text>
        <DrawerContentScrollView {...this.props}>
          <DrawerItemList {...this.props} labelStyle={{ fontSize: 18 }} />
          {/* <DrawerItem label="Sign out" labelStyle={styles.label} /> */}
        </DrawerContentScrollView>
      </View>
    );

    const mainJSX = this.state.islogedin ? loginJSX : logoutJSX;
    return (
      <View style={container}>
        <Image source={account} style={profile} />
        {mainJSX}
      </View>
    );
  }
}

{/* <DrawerContentScrollView {...props}>
<DrawerItemList {...props} labelStyle={{ fontSize: 18 }} />
{/* <DrawerItem label="Sign out" labelStyle={styles.label} /> */}
// </DrawerContentScrollView> */}

const Drawer = createDrawerNavigator();

// eslint-disable-next-line react/no-multi-comp
export default class MenuDrawer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >

        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          initialRouteName="Home"
          drawerStyle={{
            backgroundColor: '#f7c744',
            width: 240,
          }}
        >
          <Drawer.Screen name="Home" component={TabNavigator} />
          <Drawer.Screen name="Change Information" component={ChangeInfo} />
          <Drawer.Screen name="Oders History" component={OdersHistory} />
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
    color: '#f7c744',
    fontSize: 20
  }
});
