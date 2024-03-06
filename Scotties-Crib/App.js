import React from 'react';
import {Text, View} from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen'
import { StatusBar } from 'expo-status-bar';
import { ClerkProvider } from '@clerk/clerk-expo';
import { SignedIn } from '@clerk/clerk-expo';
import { SignedOut } from '@clerk/clerk-expo';

const YourApp = () => {
  return (
    <ClerkProvider publishableKey='pk_test_c3RlcmxpbmctZ3VsbC0xNS5jbGVyay5hY2NvdW50cy5kZXYk'>
    <View className="flex-1 bg-white">
      {/* <Text>ScottiesCrib🎉</Text> */}
      <StatusBar style='auto'/>

        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
         <LoginScreen/>
        </SignedOut>
      
    </View>
    </ClerkProvider>

  );
};

export default YourApp;