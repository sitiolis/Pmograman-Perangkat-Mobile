import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Footer extends Component {
    render() { 
        return ( 
            <View style={footers.bawah}>
                <View style={{flex: 1, backgroundColor: '#FF7272', height: 100}}>
            
                </View>
                <View style={{flex: 1, backgroundColor: '#98BAE7'}}>
                
                </View>
                <View style={{flex: 1, backgroundColor: '#CDF2CA'}}>
        
                </View>
                <View style={{flex: 1, backgroundColor: '#FBF46D'}}>
        
                </View>
                <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        
                </View>
            </View>
         );
    }
}
 
const footers = StyleSheet.create({
    bawah :{
        flexDirection: 'row'
    }
})
export default Footer;
