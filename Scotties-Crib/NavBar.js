import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Home';
import ProfileScreen from './Profile';
import UploadScreen from './Upload';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
      </Tab.Navigator>
    
  );
}

export default NavBar;