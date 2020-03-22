import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Item(props) {
        const { imageStyle, price, name } = styles;
        const { category, onPress } = props;
        //`http://192.168.64.2/api/images/type/${category.image}`
        return (
            <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Image 
                    source={{ uri: `http://192.168.64.2/api/images/product/${category.images[0]}` }} 
                    style={imageStyle} 
                    key={category.id} 
                />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={name}>{category.name}</Text>
                    <Text style={price}>{category.price}$</Text>
                </View>
            </View>

        </TouchableOpacity>

        );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f7c744',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    name: {
        fontSize: 20,
        fontFamily: 'Avenir',
    },
    imageStyle: {
        width: 150,
        height: 150
    },
    price: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#0733ba'
    }
});
