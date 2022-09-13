import {Text,StyleSheet} from 'react-native'
function InstructionText(props) {
  return (
    <Text style={[styles.instructionText,props.style]}>{props.children}</Text>
  )
}
export default InstructionText
const styles=StyleSheet.create({
    instructionText: {
        fontSize: 24,
        color: 'white'
    }
})