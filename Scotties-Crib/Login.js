import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login functionality here
    console.log('Login pressed');
  };

  const navigateToSignUp = () => {
    // Navigate to the Sign Up screen here
    console.log('Navigate to Sign Up');
    navigation.navigate('Signup', {name: 'Login'});
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0b2138" barStyle="light-content" />
      <Text style={styles.welcomeText}>Log In</Text>
      <Image source={require('./assets/icon.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#97c4e1"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#97c4e1"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={navigateToSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b2138',
  },
  logo: {
    marginBottom: 20,
    width: 250, // Set your logo width
    height: 250, // Set your logo height
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
    fontSize: 36,
    marginBottom: 20, // Adjusted for spacing
    fontWeight: 'bold',
    textAlign: 'center',
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
  signUpButton: {
    marginTop: 15,
  },
  signUpButtonText: {
    color: '#97c4e1',
    fontSize: 16,
  },
});

export default LoginScreen;
