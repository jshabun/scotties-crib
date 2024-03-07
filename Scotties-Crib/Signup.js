import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


const SignupScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Simulate basic email validation
      if (email.trim() === '' || !email.includes('@')) {
        console.log('Invalid email format');
        Alert.alert('Error', 'Invalid email format. Please try again following the format: test@test.com');
        return;
      }
  
      // Check if password is empty
      if (password.trim() === '') {
        console.log('Password cannot be empty');
        Alert.alert('Error', 'Password cannot be empty');
        return;
      }

      // Retrieve existing users from AsyncStorage
      const existingUsersJson = await AsyncStorage.getItem('users');
      const existingUsers = existingUsersJson ? JSON.parse(existingUsersJson) : [];

      // Add the new user to the existing users array
      const newUser = { 
        email, 
        password,
        name: '',
        year: '',
        major: '',
        bio: '',
        image: null,
       };
      const updatedUsers = [...existingUsers, newUser];

      // Save updated users array back to AsyncStorage
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
      await AsyncStorage.setItem('loggedInUserEmail', email);
      console.log('Signup successful');

      // Navigate to another screen after successful signup
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle other errors (e.g., show an error message)
    }
  };

  const navigateToLogin = () => {
    // Navigate to the Sign Up screen here
    console.log('Navigate to Login');
    navigation.navigate('Login', {name: 'Login'});
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0b2138" barStyle="light-content" />
      <Text style={styles.welcomeText}>Sign Up</Text>
      <Image source={require('./assets/icon.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#97c4e1"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#97c4e1"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        autoCapitalize='none'
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={navigateToLogin}>
        <Text style={styles.loginButtonText}>Back to Login</Text>
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
  loginButton: {
    marginTop: 15,
  },
  loginButtonText: {
    color: '#97c4e1',
    fontSize: 16,
  },
});

export default SignupScreen;