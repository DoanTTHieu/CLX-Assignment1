import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default class Category extends React.Component {
  render(){
    return (
      <View>
        <Text>Categoryy</Text>
      </View>
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
