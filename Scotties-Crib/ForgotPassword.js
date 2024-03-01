import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from './PWComponents/Input';
import Header from './PWComponents/Header';
import { moderateScale } from 'react-native-size-matters';

export default ForgotPassword = ({ navigation, route }) => {
    const [email, setEmail] = useState('');

    const handleSendEmail = () => {
        if (email) {
            Alert.alert('Email Sent', 'Password recovery email has been sent to ' + email);
        } else {
            Alert.alert('Error', 'Please enter your email address');
        }
    };

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
            <StatusBar style="dark" />
            <ScrollView style={{ paddingTop: moderateScale(60) }}>
                <Header
                    title="Forgot Password"
                    text="Please enter your registered email address to recover your password"
                />
                <View style={styles.inputBox}>
                    <Input
                        label="Email"
                        errorMessage="Enter your account email address"
                        containerStyle={styles.inputStyle}
                        right={() =>
                            <MaterialIcons name="error" size={20} color={'red'} />
                        }
                        value={email}
                        onChangeText={setEmail}
    
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={handleSendEmail}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.btnText}>
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputBox: {
        paddingHorizontal: "5%",
        marginTop: "5%"
    },
    inputStyle: {
        marginBottom: "8%"
    },
    otpBox: {
        marginTop: "14%"
    },
    passwordStyle: {
        color: '#B4192F',
        fontSize: moderateScale(14),
        fontWeight: "600"
    },
    footerText: {
        color: "#A1A5AC",
        fontSize: moderateScale(14),
        fontWeight: "400",
        textAlign: "center"
    },
    link: {
        color: '#0D253C',
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: '#000080',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "5%",
        borderRadius: 10,
        marginTop: "10%",
        marginBottom: "10%"
    },
    btnText: {
        color: "white",
        fontSize: moderateScale(16),
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: "5%",
        marginTop: "4%"
    }
});
