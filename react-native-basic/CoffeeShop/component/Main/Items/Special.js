import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

import capuchino from '../../../assets/Items/capuchino.jpg';
import cooktail from '../../../assets/Items/cooktail.jpg';
import miti from '../../../assets/Items/miti.jpg';
import bacXiu from '../../../assets/Items/bacXiu.jpg';

export default class SpecialItems extends Component {
  render() {
    const { wrapper, imageStyle } = styles;
    return (
      <View style={wrapper}>
        <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          index={2}
          showPagination
          width={imageStyle.width}
          height={imageStyle.height}
        >
          <Image source={capuchino} style={imageStyle} />
          <Image source={miti} style={imageStyle} />
          <Image source={cooktail} style={imageStyle} />
          <Image source={bacXiu} style={imageStyle} />
        </SwiperFlatList>
      </View>
    );
  }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        padding: 10,
    },
    imageStyle: {
        width: width - 40,
        height: height * 0.3,
        resizeMode: 'cover'
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 30
    },
    child: {
      height: height * 0.3,
      width,
      justifyContent: 'center'
    },
});

