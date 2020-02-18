import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from'../components/CategoryListItem';
console.log(React.version);

export default class Categories extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    categories: [
      { id: 1, name: 'Dụng cụ nhà bếp'},
      { id: 2, name: 'Dụng cụ làm vườn'},
      { id: 3, name: 'Sofa'},
      { id: 4, name: 'May giat'},
      { id: 5, name: 'Tivi'},
      { id: 6, name: 'Dieu Hoa'}
    ]
    };
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
