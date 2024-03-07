import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Search for products..."
        placeholderTextColor="#999999" // Placeholder text color
      />
      <Button title="Search" onPress={() => {}} color="#007bff" /> {/* Blue search button */}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc', // Border color
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },
});

export default SearchBar;
