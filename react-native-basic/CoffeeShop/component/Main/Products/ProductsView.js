import React from 'react';
import { View, StyleSheet } from 'react-native';
import SpecialProduct from './SpecialProduct';
import Items from './Items';

export default class ProductsView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SpecialProduct navigation={this.props.navigation} />
                <Items navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, paddingTop: 0, backgroundColor: '#dbdbd8'
    },
});

