import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './component/Header';
import Midle from './component/Midle';
import Footer from './component/Footer';

class App extends Component {
  
  render() { 
    return (
     <View>
       <Header/>
       <Midle/>
       <Footer/>
     </View>  
    
     );
  }
}
 
export default App;