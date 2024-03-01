import { StyleSheet, Text, View, TextInput } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

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
        fontSize: moderateScale(11),
        marginTop: "2%"
    },
    errorBorder: {
        borderColor: "black",
        borderWidth: 2,
    },
    inputBox: {
        flexDirection: "row",
        height: moderateScale(59),
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "A1A5AC"
    },
    input: {
        flex: 1,
        fontSize: moderateScale(18),
        paddingHorizontal: "3%",
        color: "1A1A1A"
    },
    label: {
        fontWeight: "400",
        fontSize: moderateScale(14),
        marginBottom: "2%",
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
    },
});