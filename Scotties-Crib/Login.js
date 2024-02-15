import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from './styles';
import { Button } from 'react-native'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    alert('Login not implemented.');
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={globalStyles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={globalStyles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={[globalStyles.button, { backgroundColor: '#007BFF' }]}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text
        onPress={() => navigation.navigate('Signup')}
        style={globalStyles.linkText}
      >
        Don't have an account? Sign Up {'\n \n'}
      </Text>

      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
