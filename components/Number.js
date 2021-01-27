import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Number(props) {
    return (
        <View style={styles.container}>
            <Text>{props.children}</Text>
        </View>
            
            )
}

const styles = StyleSheet.create({
    container : {
        borderColor : 'black',
        padding: 20,
        textAlign: 'center',
        alignItems: 'center'
        
    }
  
})
