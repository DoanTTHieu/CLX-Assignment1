import React, {Component} from 'react';
import {Text} from 'react-native';

export default class SettingsScreen extends Component{
    static navigationOptions ={
        title: 'Setting'
    };

    render(){
        return <Text>Settings</Text> 
    }
}