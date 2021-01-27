import React from 'react'
import {View, TextInput, Text, StyleSheet} from 'react-native'
export default function Card(props) {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
                    
    )
}

const styles = StyleSheet.create({
    card : {
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 3},
        shadowOpacity: 0.26,
        elevation: 6,
        borderRadius: 9
    }

})
