import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Midle extends Component {
    render() { 
        return ( 
            <View style={Midles.tengah}>
                <View style={Midles.content}>

                </View>
                <View style={{flex: 2, backgroundColor: '#FFCA03'}}>

                </View>
            </View>
         );
    }
}
 
const Midles = StyleSheet.create({
    tengah :{
        flexDirection: 'row'
    },
    content :{
        flex: 3,
        height: 518,
        backgroundColor: '#FF2442'
    }
})

export default Midle;