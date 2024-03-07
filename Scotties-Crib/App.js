import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import SignupScreen from './Signup';
import { globalStyles } from './styles';
<<<<<<< HEAD
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

=======
import Profile from './Profile'
>>>>>>> josh/login-page

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
<<<<<<< HEAD
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              headerShown: false,
            }}
          />
=======


        <Stack.Screen name="Profile" component={Profile} />
>>>>>>> josh/login-page
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