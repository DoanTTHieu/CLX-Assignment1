import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from'./components/CategoryListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem/>
      <CategoryListItem/>
      <CategoryListItem/>

    </View>
  );
}

// export default class App extends React.Component() {
//   render(){
//     return (
//       <View style={styles.container}>
//         <CategoryListItem/>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
});
