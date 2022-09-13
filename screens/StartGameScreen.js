import { View, TextInput, StyleSheet, Alert, Dimensions, useWindowDimensions } from 'react-native'
import { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
const StartGameScreeen = (props) => {
    const [enteredNumber, setEnteredNumber] = useState("")
    const {width,height}=useWindowDimensions()
    const inputHandler = (value) => {
        setEnteredNumber(value)
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalide Number", "Number should be between 1 to 100", [{ style: 'destructive', onPress: resetInputHandler }])
            return
        }
        props.onPickNumber(chosenNumber)
    }
    const resetInputHandler = () => {
        setEnteredNumber("")
    }
    const marginTopDistance=height<400 ? 0 : 100
    return (
        <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Guess Number</InstructionText>
                <TextInput value={enteredNumber} onChangeText={inputHandler} keyboardType="number-pad" autoCapitalize='none' autoCorrect={false} maxLength={2} style={styles.numberInput} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}
export default StartGameScreeen
const deviceHeight=Dimensions.get("window").height
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: deviceHeight<400 ? 80 : 100,
        alignItems: 'center'
    },
    
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})