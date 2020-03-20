import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Item(props) {
        const { imageStyle } = styles;
        const { category, onPress } = props;

        return (
            <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Image source={{ uri: category.image }} style={imageStyle} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.name}>{category.name}</Text>
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
        fontSize: 32,
        fontFamily: 'Avenir',
    },
    imageStyle: {
        width: 150,
        height: 150
    }
});
