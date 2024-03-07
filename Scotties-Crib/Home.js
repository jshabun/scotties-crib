import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from './searchBar';
import NavBar from './NavBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SearchBar />
        <Image
          source={require('./assets/freddy.jpg')}
          style={styles.image}
        /> 
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
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75, 
  },
});

export default HomeScreen;