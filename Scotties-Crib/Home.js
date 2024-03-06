import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    
        <View style={styles.container} >
        <Text style={{ textAlign: 'center', fontSize: 32, color: 'white'}}>
            Your Homepage
        </Text>
          <NavigationContainer>
            <TabNavigation/> 
          </NavigationContainer>
        </View>
    
  );
};


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#0b2138',
//     }
// });

export default HomeScreen;
