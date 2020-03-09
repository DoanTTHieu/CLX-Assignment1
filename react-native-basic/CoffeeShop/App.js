// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import ConNguoi from './components/ConNguoi';

// export default class App extends React.Component {
//   render(){
//     return (
//       <View style = {styles.container}>
//         <ConNguoi hoten = 'TI'/> 
//         <ConNguoi hoten = 'TI1'/> 
//         <ConNguoi hoten = 'TI0'/>     
//       </View>
//     );  
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// In App.js in a new project

import React, { Component } from 'react';
import { View, Text , TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import A from './screens/Ascreen';
import B from './screens/Bscreen';
import C from './screens/Cscreen';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
   </View>
  );
}

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

export default class App extends Component {
render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

