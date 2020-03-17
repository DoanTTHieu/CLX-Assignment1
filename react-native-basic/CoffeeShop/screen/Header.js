import React, { Component } from 'react';
import { TouchableOpacity, Text, Dimensions, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const { height } = Dimensions.get('window');
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
                
        };
    }

    render() {
        return (
            <View style={{ height: height / 8, backgroundColor: '#f78ae0' }} >
            <TouchableOpacity onPress={() => this.navigation.dispatch(DrawerActions.openDrawer())} >
              <Text>Open MENU</Text>
            </TouchableOpacity>
          </View>
          );
    }
}

export default Header;
