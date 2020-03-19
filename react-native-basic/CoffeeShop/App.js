import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import LoginScreen from './component/Auth/SignIn';
import MenuDrawer from './component/Main/Drawer';

StatusBar.setHidden(true);
//const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MenuDrawer />
      </NavigationContainer>
    );
  }
}

// const Stack = createStackNavigator();

// export default class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Home" component={MenuDrawer} />
//           < Stack.Screen name="Login" component={LoginScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }
