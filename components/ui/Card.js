import { StyleSheet,View } from "react-native";
const Card = (props) => {
    return (
        <View style={styles.inputContainer}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8,
        backgroundColor: '#72263c',
        justifyContent: 'center',
        alignItems: "center"

    },
})
export default Card;