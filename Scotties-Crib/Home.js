import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from './searchBar';
import NavBar from './NavBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SearchBar />
        
        {/* <NavBar /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
});

export default HomeScreen;