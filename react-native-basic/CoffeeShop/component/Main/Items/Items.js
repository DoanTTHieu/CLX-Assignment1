import React from 'react';
import {
  FlatList, ActivityIndicator,
  Text, View, StyleSheet, Image
} from 'react-native';
import SpecialItems from './Special';

export default class ItemsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
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
      <View style={{ flex: 1, paddingTop: 0, backgroundColor: '#dbdbd8' }}>
        <SpecialItems />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Item name={item.name} image={item.image} />}
        />
        {/* </FlatList> */}
      </View>
    );
  }
}

function Item({ name, image }) {
  const { imageStyle } = styles;
  return (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={imageStyle} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f7c744',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  name: {
    fontSize: 32,
    fontFamily: 'Avenir',
  },
  imageStyle: {
    width: 150,
    height: 150
  }
});

