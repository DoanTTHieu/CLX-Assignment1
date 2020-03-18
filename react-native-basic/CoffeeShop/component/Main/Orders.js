import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import menu from '../../assets/Others/menu.png';

export default class OrdersScreen extends Component {
    render() {
        return (
            <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Image
              source={menu}
              style={{ width: 35, height: 35 }}
            />
          </TouchableOpacity>
            </View>
        );
    }
}
