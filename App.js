import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreeen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useState,useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [guessNumber,setGuessNumber]=useState(0)
  let screen;
  const [gameOver,setGameIsOver]=useState(true)
  const pickNumberHandler = (number) => {
    setGameIsOver(false)
    setUserNumber(number)
  }
  const gameOverHandler=()=>{
    setGameIsOver(true)
  }
  const newGameHandler=()=>{
    setGameIsOver(false)
    setUserNumber(null)
  }

  if(userNumber){
    screen=<GameScreen onGameOver={gameOverHandler} userNumber={userNumber} />
  }else{
    screen=<StartGameScreeen onPickNumber={pickNumberHandler} />
  }
  if(userNumber && gameOver){
    screen=<GameOverScreen userNumber={userNumber} roundsNumber={guessNumber} onStartNewGame={newGameHandler}/>
  }
  return (
    <LinearGradient colors={["#72263c","#ddb52f"]} style={styles.appContainer}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode="cover" imageStyle={styles.backgroundImage} style={styles.appContainer}>
        <SafeAreaView style={styles.appContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
