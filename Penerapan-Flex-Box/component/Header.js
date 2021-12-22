import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Header extends Component {
    render() { 
        return ( 
            <View style={headers.atas}>
                 <View style={{flex: 1, backgroundColor: '#F5F5F5', height: 100}}>
            
                </View>
                <View style={{flex: 1, backgroundColor: '#FBF46D'}}>
                
                </View>
                <View style={{flex: 1, backgroundColor: '#CDF2CA'}}>
        
                </View>
                <View style={{flex: 1, backgroundColor: '#98BAE7'}}>
        
                </View>
                <View style={{flex: 1, backgroundColor: '#FF7272'}}>
        
                </View>
            </View>
         );
    }
}

const headers = StyleSheet.create({
    atas :{
        flexDirection: 'row'
    }
})
 
export default Header;