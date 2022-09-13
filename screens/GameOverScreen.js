import { View, Text, Image, StyleSheet } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
function GameOverScreen(props) {
  return (
    <View style={styles.rootContainer}>
      <Title>GameOver</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} />
      </View>
      <Text>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></Text>
      <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}
const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    padding:24,
    alignItems:'center',
    justifyContent:'center'
  },
  imageContainer:{
    borderRadius:400,
    width:300,
    height:300,
    borderWidth:2,
    borderColor:'white',
    overflow:'hidden',
    margin:30
  },
  image:{
    width:"100%",
    height:'100%'
  },
  summaryText:{

  },
  highlight:{
    fontWeight:'bold',
    color:'pink'
  }
})

export default GameOverScreen