import { Text, View, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import {Ionicons} from '@expo/vector-icons'

let minBoundry = 1
let maxBoundry = 100

const GameScreen = (props) => {
    useEffect(()=>{
        minBoundry=1,
        maxBoundry=100
    },[])
    function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;

        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    }
    function nextGuessHandler(direction) {
        if (direction == "lower" && currentGuess < props.userNumber || direction == "higher" && currentGuess > props.userNumber) {
            Alert.alert("Alert", "Please play a fair game", [{ text: 'ok', style: 'cancel' }])
            return;
        }
        if (direction == "lower") {
            maxBoundry = currentGuess
        }
        else {
            minBoundry = currentGuess + 1
        }
        const newRandomNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess)
        setCurrentGuess(newRandomNumber)
    }
    const initialState = generateRandomBetween(1, 100, props.userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialState)

    useEffect(() => {
        if (props.userNumber == currentGuess) {
            props.onGameOver()
        }
    }, [currentGuess, props.userNumber])

    return (
        <View style={styles.screen}>
            <Title>Opponent Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={{marginBottom:20}}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
                            <Ionicons name="add-circle" size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="remove-circle" size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                {/* Log Rounds */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,

    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }

})
export default GameScreen;