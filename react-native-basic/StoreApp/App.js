import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CategoryListItem from'./components/CategoryListItem';
console.log(React.version);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    categories: [
      { id: 1, name: 'Dụng cụ nhà bếp'},
      { id: 2, name: 'Dụng cụ làm vườn'},
      { id: 3, name: 'Sofa'}
    ]
    };
  }

  render(){
    const {categories} = this.state;
    return (
      <FlatList data = {categories}
        renderItem = {({item}) => <CategoryListItem category = {item}/>}
        keyExtractor = {item => item.id.toString()} 
        contentContainerStyle = {{paddingLeft: 16, paddingRight: 16}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  }
});
