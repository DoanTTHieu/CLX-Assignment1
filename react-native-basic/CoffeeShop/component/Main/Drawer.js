import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import OdersHistory from '../Menu/OdersHistory';
import ChangeInfo from '../Menu/ChangeInfo';
import account from '../../assets/Others/account.png';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={styles.customStyle}>
      <View>
        <Image source={account} style={{ width: 100, height: 100 }} />
      </View>
      <View>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Sign out" />
        </DrawerContentScrollView>
      </View>
    </View>
  );
}

export default class MenuDrawer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >

        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
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
    paddingTop: 100
  }
});
