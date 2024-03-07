import { StyleSheet, Text, View } from 'react-native';

export default function Header({
    title,
    text
}) {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={[styles.text, { marginRight: "3%" }]}>
                {text}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        marginTop: "10%",
        marginHorizontal: "5%"
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: "white"
    },
    text: {
        fontSize: 14,
        fontWeight: "300",
        color: "white",
        lineHeight: 21,
        marginTop: "5%"
    }
});