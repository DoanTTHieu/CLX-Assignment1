import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import CategoryListItem from'./components/CategoryListItem';

export default function App() {
  return (
    <View>
      <ScrollView style= {{paddingLeft: 2, paddingRight: 2}}>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
      </ScrollView>
    </View>
  );
}

// export default class App extends React.Component() {
//   render(){
//     return (
//       <View style={styles.container}>
//         <CategoryListItem/>
//         <CategoryListItem/>
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
    paddingLeft: 16,
    paddingRight: 16
  },
});
