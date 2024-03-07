import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');

  const navigateToResetPassword = async () => {
    // Navigate to the Forgot Password screen here
    try {
        if (email.trim() === '' || !email.includes('@')) {
            console.log('Invalid email format');
            Alert.alert('Invalid Email', 'Please check that the email was entered correctly');
            return;
        }

        const storedUsersJson = await AsyncStorage.getItem('users');
        // console.log(storedUsersJson)
        const storedUsers = storedUsersJson ? JSON.parse(storedUsersJson) : [];
  
        // Check if users exist in AsyncStorage
        if (storedUsers.length > 0) {
            // Find the user with the entered email
            const user = storedUsers.find(user => user.email === email);
    
            if (user && user.email === email) {
                console.log('Reset verification success');
                // Save the logged-in user's email
                await AsyncStorage.setItem('loggedInUserEmail', email);
                // Navigate to another screen after successful verification
                console.log('Navigate to Reset Password');
                navigation.navigate('ResetPassword', {email: email});
            } else {
                console.log('Invalid email');
                Alert.alert('Error', 'Invalid email');
            }
        } else {
            console.log('No stored users found');
            Alert.alert('Error', 'No stored users found');
        }
    } catch (error) {
        console.error('Error going to password reset:', error);
        // Handle other errors (e.g., show an error message)
    }
    
  };

  const navigateToLogin = () => {
    console.log('Navigate to Login');
    navigation.navigate('Login', {name: 'Login'});
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0b2138" barStyle="light-content" />
      <Text style={styles.welcomeText}>Forgot Password</Text>
      <Text style={styles.instructions}>Please enter your regsitered email</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#97c4e1"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize='none'
        />
      <TouchableOpacity style={styles.button} onPress={navigateToResetPassword}>
        <Text style={styles.buttonText}>Verify Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={navigateToLogin}>
        <Text style={styles.loginButtonText}>Return to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0b2138',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    color: '#0b2138',
  },
  welcomeText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: '2%'
  },
  instructions: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    marginBottom: '10%',
  },
  button: {
    width: '80%',
    backgroundColor: '#97c4e1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  loginButton: {
    marginTop: 15,
  },
  loginButtonText: {
    color: '#97c4e1',
    fontSize: 16,
  }
});

export default ForgotPassword;


/*
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from './PWComponents/Input';
import Header from './PWComponents/Header';

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
            <ScrollView style={{ paddingTop: 60 }}>
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
        fontSize: 14,
        fontWeight: "600"
    },
    footerText: {
        color: "#A1A5AC",
        fontSize: 14,
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
        fontSize: 16,
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: "5%",
        marginTop: "4%"
    }
});
*/