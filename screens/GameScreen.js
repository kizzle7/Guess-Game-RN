import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
import logo from '../images/guess_pic.png'
import Card from '../components/Card'
import Number from '../components/Number'

export default function GameScreen(props) {
    return (
        <View style={styles.screen}>
            <Image source={logo} style={{width: '100%', height: 155}} />
            <View style={styles.gameArea}>
                <Text style={styles.compText}>Computers Guess Play</Text>
                <Card style={styles.guessInterface}>
                   <Number>{props.userChoice}</Number>
                <View style={styles.btnControl}>
                    <Button title="Lower" />
                    <Button title="Higher" />
                </View>
                </Card>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
    },
    gameArea: {
        marginTop: 20
    },
    guessInterface: {
        width: 300,
        padding: 50,
        backgroundColor: 'white',
        marginTop: 25
        
    },
    compText: {
        fontWeight: 'bold',
        fontSize: 30,
        color:'purple',
        textAlign: 'center', 
    },
    btnControl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
   
})
