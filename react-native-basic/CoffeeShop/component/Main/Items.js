/* eslint-disable no-undef */
import React from 'react';
import { FlatList, ActivityIndicator, 
  Text, View, StyleSheet, Image } from 'react-native';

export default class ItemsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('http://192.168.64.2/WebService/Vidu1.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, 
        // function() {
        
        // } 
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Item name={item.name} image={item.image} />}
        //keyExtractor={({id}, index) => id
        />
      </View>
    );
  }
}

function Item({ name, image }) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={{ width: 70, height: 70 }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});

