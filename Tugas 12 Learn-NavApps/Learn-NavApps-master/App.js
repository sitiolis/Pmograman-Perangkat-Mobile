import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screen/HomeScreen';
import OrderScreen from './screen/OrderScreen';
import DetailScreen from './screen/DetailScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const Stack = createNativeStackNavigator(); 
    return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Order" component={OrderScreen} options={{title: "Goods Order"}} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
     );
  }
}
 
export default App;