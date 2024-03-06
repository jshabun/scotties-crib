import {View, Text} from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import UploadScreen from '../Screens/UploadScreen';
import ProfileScreen from '../Screens/ProfileScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}