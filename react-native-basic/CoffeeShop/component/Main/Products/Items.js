import React, { Component } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';

import Item from './Item';

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        // eslint-disable-next-line no-undef
        return fetch('http://192.168.64.2/WebService/Vidu1.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                },
                    // function() {
                    // } 
                );
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        //check fetch data
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        const { navigation } = this.props;

        return (
            <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) =>
                <Item 
                category={item}
                onPress={() => navigation.navigate('ProductDetail')} 
                />}
            />
        );
    }
}
