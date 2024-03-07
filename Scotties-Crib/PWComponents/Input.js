import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input({
    containerStyle,
    label = null,
    errorMessage = null,
    right = null,
    ...props
}) {

    return (
        <View style={containerStyle}>
            {
                label && (
                    <Text style={{ ...styles.label, color: 'black'}}>{label}</Text>
                )
            }
            <View style={[styles.inputBox, errorMessage && styles.errorBorder]}>
                <TextInput
                    {...props}
                    style={styles.input}
                />
                {
                    right && (
                        <View style={styles.icon}>
                            {right()}
                        </View>
                    )
                }
            </View>
            {
                errorMessage && (
                    <Text style={styles.error}>
                        {errorMessage}
                    </Text>
                )
            }
        </View>
    );

}

const styles = StyleSheet.create({
    error: {
        color: "red",
        fontWeight: "400",
        fontSize: 11,
        marginTop: "2%"
    },
    errorBorder: {
        borderColor: "red",
        borderWidth: 2,
    },
    inputBox: {
        flexDirection: "row",
        height: 59,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "A1A5AC"
    },
    input: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: "3%",
        color: "white"
    },
    label: {
        fontWeight: "400",
        fontSize: 14,
        marginBottom: "2%",
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
    },
});