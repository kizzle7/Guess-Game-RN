import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
            
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        backgroundColor: '#444',
        padding: 35,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})

export default Header
