import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';
import global from '../../Menu/global';

const back = require('../../../assets/Others/back.png');
const cart = require('../../../assets/Others/cart.png');

const url = 'http://192.168.64.2/api/images/product/';

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSpecialProduct: true,
        };
    }
    addThisProduct() {
        const { product } = this.props;
        global.addProductToOder(product);
    }
    goBack() {
        const { navigation } = this.props;
        navigation.goBack();
    }
    render() {
        const {
            wrapper, cardStyle, header, footer, backStyle, imageContainer,
            cartStyle, textBlack, textSmoke, textHighlight, textMain,
            titleContainer, descContainer, productImageStyle, descStyle
        } = styles;
        const { route } = this.props;
        const { product } = route.params;
        // const SpecialJSX = (
        //     <Image source={{ uri: `http://192.168.64.2/api/images/type/${product.image}` }} style={productImageStyle} />
        // );
        // const notSpecialJSX = (
        //     <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
        //         <Image source={{ uri: `${url}${product.images[0]}` }} style={productImageStyle} />
        //         <Image source={{ uri: `${url}${product.images[0]}` }} style={productImageStyle} />
        //     </ScrollView>
        // );
        // const imageDisplay = this.state.isSpecialProduct ? SpecialJSX : notSpecialJSX;
        return (
            <View style={wrapper}>
                <View style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image style={backStyle} source={back} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.addThisProduct.bind(this)}>
                            <Image style={cartStyle} source={cart} />
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                    <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                        <Image source={{ uri: `${url}${product.images[0]}` }} style={productImageStyle} />
                        <Image source={{ uri: `${url}${product.images[0]}` }} style={productImageStyle} />
                    </ScrollView>
                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{product.name.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>{product.price}$</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>{product.description}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 40,
        height: 40
    },
    backStyle: {
        width: 40,
        height: 40
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
});
