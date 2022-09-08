import { View, Pressable, Text, StyleSheet } from 'react-native'
const PrimaryButton = (props) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={props.onPress} style={styles.buttonInnerContainer} android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow:'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})
export default PrimaryButton;
