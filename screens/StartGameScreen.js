import React,  {useState} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Card from  '../components/Card'
import Input from '../components/Input'
import Number from  '../components/Number'

export default function StartGameScreen() {
    const [textNumber, setText] =  useState('');
    const [confirm, setConfirmed] =  useState('');
    const [guessNum, setNumber] =  useState('');


    const onChange = (text) => {
        setText(text.replace(/[^0-9]/g, ''));
    }

    const resetBtn = () => {
        setText('');
    }

    const confirmButton = () => {
        const textNum =  parseInt(textNumber);
        console.log(textNum)
        if(isNaN(textNum) || textNum <= 0 || textNum > 99){
            Alert.alert('Invalid Number!', 'Text to be entered must be between 1 and 90', [
                {
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetBtn
                }
            ])
            return;
        }
        setConfirmed(true);
        setNumber(textNum);
        setText('')
    }


    let selectedNum;

    if (confirm){
        selectedNum = (
            <View style={{marginVertical: 20}}>
                <Card style={styles.numArea}>
                <Text>Number you entered was : {guessNum}</Text>
            </Card>

            </View>
            
        )

    }

   
    return (
        <View style={styles.screen}>
            <Card style={styles.mainArea}>
                <View style={styles.input}>
                    <Input style={styles.inputStyle} maxLength={2} onChangeText={onChange} value={textNumber} keyboardType="numeric" />
                </View>
                <View style={styles.btn}>
                <Button style={styles.btn_size} title="Confirm" color="green" onPress={confirmButton}  />
                <Button style={styles.btn_size} title="Reset"  color="red" />               

            </View>
            </Card>
            {selectedNum}
        </View>
    )
}

const styles =  StyleSheet.create({
    screen: {
        marginTop: 40,
        alignItems: 'center'
    },

    mainArea : {
        width: 240,
        textAlign: 'center',
        padding: 40,
        backgroundColor: 'white',    
       
    },

    input: {
        alignItems: 'center'
    },

    inputStyle : {
        height: 30,
        width: 30,
        textAlign:'center',
        fontSize: 25
        
    },
    numArea: {
        padding: 10,
        width: 240,
        backgroundColor :'grey',
        textAlign:'center',
        
    },
    btn : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20
    },
    btn_size: {
        width: '60%',
        paddingHorizontal : 10
    },

    selectedNum : {
        padding: 24,
        width:200,
        backgroundColor: 'white'
    }
  

})
