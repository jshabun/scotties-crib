import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('./../../assets/bear-icon.png')}
        style={{ width: 100, height: 100, marginBottom: 20, borderRadius:50 }}
      />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>ScottiesCrib</Text>
        <Text style={{ fontSize: 20, color: 'slategray', marginTop: 10 }}>
          A Marketplace for UCR students
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            marginTop: 20,
          }}
          placeholder="Username"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            marginTop: 10,
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'darkblue',
            borderRadius: 5,
            padding: 10,
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}