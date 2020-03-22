import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

export default class SpecialItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
        types: [],
    };
}
  // eslint-disable-next-line react/sort-comp
  goToProductDetail() {
    const { navigation } = this.props;
    navigation.navigate('ProductDetail');
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    return fetch('http://192.168.64.2/api')
        .then((response) => response.json())
        .then((responseJson) => {
            const { type } = responseJson;
            this.setState({
                types: type,
            });
        })
        .catch((error) => {
            console.error(error);
        });
  }

  render() {
    const { wrapper, imageStyle } = styles;
    return (
      <View style={wrapper}>
        <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          index={1}
          showPagination
          width={imageStyle.width}
          height={imageStyle.height}
        >
          {this.state.types.map((e) => (
            <TouchableOpacity key={e.id}>
              <Image source={{ uri: `http://192.168.64.2/api/images/type/${e.image}` }} style={styles.imageStyle} />
            </TouchableOpacity>
          ))}
        </SwiperFlatList>

      </View >
    );
  }
}
//onPress={this.goToProductDetail.bind(this)}
//navigation.navigate('ProductDetail')
//this.goToProductDetail.bind(this)
const { width, height } = Dimensions.get('window');

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
