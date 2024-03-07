import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import HomeScreen from './Home';
import ProfileScreen from './Profile';
import UploadScreen from './Upload';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Upload') {
            iconName = 'add-circle';
          } else if (route.name === 'Profile') {
            iconName = 'person-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: styles.label,
        tabBarItemStyle: styles.tab,
        tabBarStyle: [
          styles.tabBar,
          null,
        ],
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: '#FFE082', // Change the active tab color
        inactiveTintColor: 'white', // Change the inactive tab color
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingTop: 10,
  },
  label: {
    fontSize: 12,
  },
  tabBar: {
    height: 80,
    display: 'flex',
    backgroundColor: '#0b2138',
  },
});

export default NavBar;
