import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import SignupScreen from './Signup';
import { globalStyles } from './styles';
import Profile from './Profile'
import EditProfile from './EditProfile'
import AddItem from './AddItem';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            headerShown: false,   
          }}
        />
        <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
        <Stack.Screen name="Profile" component={Profile} 
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen name="EditProfile" component={EditProfile}
        options={{
          headerShown: false,
        }}/>

        <Stack.Screen name="AddItem" component={AddItem}
        options={{
          headerShown: false,
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}




/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/