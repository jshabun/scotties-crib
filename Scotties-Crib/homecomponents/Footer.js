import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>&copy; {new Date().getFullYear()} Scottie's Crib. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: '#007bff', // Blue footer background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff', // White text color
  },
});

export default Footer;
