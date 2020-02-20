import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ProductListItem from '../components/ProductListItem';
import { FlatList } from 'react-native-gesture-handler';
import Axios from 'axios';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  
  async componentDidMount(){
    const {navigation} = this.props;
    const id = navigation.getParam('id');
    console.log({id});
    try{
      const {data: products} = await Axios.get('/products?category=${id}');
      this.setState({
        products
      });
    }
    catch (error) {
      console.log(error);
    }
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
