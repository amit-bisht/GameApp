import { View, TextInput, StyleSheet,Alert } from 'react-native'
import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
const StartGameScreeen = () => {
    const [enteredNumber,setEnteredNumber]=useState("")
    const inputHandler=(value)=>{
        setEnteredNumber(value)
    }
    const confirmInputHandler=()=>{
        const chosenNumber=parseInt(enteredNumber)
        if(isNaN(chosenNumber)||chosenNumber<=0 || chosenNumber>99){
            Alert.alert("Invalide Number","Number should be between 1 to 100",[{style:'destructive',onPress:resetInputHandler}])
            return
        }
    }
    const resetInputHandler=()=>{
        setEnteredNumber("")
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput value={enteredNumber} onChangeText={inputHandler} keyboardType="number-pad" autoCapitalize='none' autoCorrect={false} maxLength={2} style={styles.numberInput} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}
export default StartGameScreeen
const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8,
        backgroundColor: '#72263c',
        justifyContent: 'center',
        alignItems: "center"

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