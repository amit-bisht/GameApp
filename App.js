import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreeen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={["#ddb52f", "#72263c"]} style={styles.appContainer}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode="cover" imageStyle={styles.backgroundImage} style={styles.appContainer}>
        <StartGameScreeen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
