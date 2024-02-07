import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    alert('signup not implemented.');
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
        <Text style={globalStyles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
