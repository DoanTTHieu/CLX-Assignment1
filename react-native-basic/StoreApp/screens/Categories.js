import React from 'react';
import axios from 'axios';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from'../components/CategoryListItem';
console.log(React.version);

export default class Categories extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    categories: []
    };
  }

  componentDidMount(){
    axios.get('/categories')
    .then(res => {
      this.setState({
        categories: res.data
      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  render(){
    const {navigation} = this.props;
    const {categories} = this.state;
    return (
      <FlatList data = {categories}
        renderItem = {({item}) => 
          <CategoryListItem category = {item} onPress = {() =>navigation.navigate('Category',{
            categoryName: item.name
          })}/>
        }
        keyExtractor = {item => item.id.toString()} 
        contentContainerStyle = {styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  }
});
