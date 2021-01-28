import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [userNum, setUserNum] = useState('');
  
  const startGameScreen = (num) => {
    setUserNum(num)
  }

  

  let content  = <StartGameScreen startGameFunc = {startGameScreen} />;
  if(userNum){
    content = <GameScreen userChoice ={userNum} />
  }
  return (
    <View style={styles.container}>
      <Header title="Guessing Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
