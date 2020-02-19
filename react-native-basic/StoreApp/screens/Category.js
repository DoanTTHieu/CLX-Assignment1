import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ProductListItem from '../components/ProductListItem';
import { FlatList } from 'react-native-gesture-handler';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
        id: 1,
        images: [
          {
            url: 
            'http://res.cloudinary.com/demo/image/upload/sample.jpg',
          }
        ],
        name: 'Anh1',
        price: '494942'
      },
      {
        id: 2,
        images: [
          {
            url: 
            'http://res.cloudinary.com/demo/image/upload/sample.jpg',
          }
        ],
        name: 'Anh2',
        price:'7777'
      }
    ]
    };
  }
  
  render(){
    return (
      <FlatList 
      data = {this.state.products}
      contentContainerStyle = {styles.container}
      numColumns = {2}
      renderItem = {({item}) => 
      <View style={styles.wrapper}>
      <ProductListItem product = {item}/>
      </View>
    }
    keyExtractor = {(item) => '${item.id}'}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wrapper:{
    flex: 1,
    paddingHorizontal: 8
  }
});
