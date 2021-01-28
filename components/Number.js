import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Number(props) {
    return (
        <View style={styles.container}>
            <View style={styles.numArea}>
            <Text style={styles.num}>{props.children}</Text>
            </View>
        </View>
            
            )
}

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
    
    },

    numArea: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 15,
        borderWidth: 2,
        padding:2,
        
    },

    num:{
        color: '#000',
        fontSize:30,
        fontWeight: 'bold',
        padding: 10
    }
  
})
