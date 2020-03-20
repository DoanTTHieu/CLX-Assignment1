import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

import capuchino from '../../../assets/Items/capuchino.jpg';
import cooktail from '../../../assets/Items/cooktail.jpg';
import miti from '../../../assets/Items/miti.jpg';
import bacXiu from '../../../assets/Items/bacXiu.jpg';

export default class SpecialItems extends Component {
  goToProductDetail() {
    const { navigation } = this.props;
    navigation.navigate('ProductDetail');
  }
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
          <TouchableOpacity onPress={this.goToProductDetail.bind(this)}>
            <Image source={capuchino} style={imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToProductDetail.bind(this)}>
            <Image source={miti} style={imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToProductDetail.bind(this)}>
            <Image source={cooktail} style={imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToProductDetail.bind(this)}>
            <Image source={bacXiu} style={imageStyle} />
          </TouchableOpacity>
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

/* <TouchableOpacity onPress={this.props.navigation.navigate('ItemsView')}>
<Image source={capuchino} style={imageStyle} />
</TouchableOpacity>
<TouchableOpacity onPress={this.props.navigation.navigate('ListItems')}>
<Image source={miti} style={imageStyle} />
</TouchableOpacity>
<TouchableOpacity onPress={this.props.navigation.navigate('ListItems')}>
<Image source={cooktail} style={imageStyle} />
</TouchableOpacity>
<TouchableOpacity onPress={this.props.navigation.navigate('ListItems')}>
<Image source={bacXiu} style={imageStyle} />
</TouchableOpacity>
*/
/* <View>
<TouchableOpacity onPress={this.props.navigation.navigate('ProductDetail')}>
  <Image source={capuchino} style={imageStyle} />
</TouchableOpacity>
</View>
<View>
<TouchableOpacity onPress={this.props.navigation.navigate('ProductDetail')}>
  <Image source={miti} style={imageStyle} />
</TouchableOpacity>
</View>
<View>
<TouchableOpacity onPress={this.props.navigation.navigate('ProductDetail')}>
  <Image source={cooktail} style={imageStyle} />
</TouchableOpacity>
</View>
<View>
<TouchableOpacity onPress={this.props.navigation.navigate('ProductDetail')}>
  <Image source={bacXiu} style={imageStyle} />
</TouchableOpacity>
</View> */

