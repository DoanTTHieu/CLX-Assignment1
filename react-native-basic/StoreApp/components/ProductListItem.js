import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {fortmatPrice} from '../utils/Number';

export default function ProductListItem(props){
    const {product, onAddToCartClick} = props;

    return (
        <View style = {styles.shadow}>
            <View style = {styles.container}>
                <Image style = {styles.img} source = {{url: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
                <View style = {styles.info}>
                    <Text style = {styles.name}>{product.name}</Text>
                    <View style = {styles.priceRow}>
                        {/* <Text style = {styles.price}>{formatPrice(product.price)}</Text> */}
                        <TouchableOpacity onPress = {onAddToCartClick}>
                            <Text style = {styles.cartText}>Mua +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        frontSize: 16,
        color: '#2f95dc'
    },
    shadow:{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0}
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    info: {
        padding: 8
    },
    img: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    name: {
        frontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        frontSize: 16,
        color: '#888',
        flex: 1
    }
});
