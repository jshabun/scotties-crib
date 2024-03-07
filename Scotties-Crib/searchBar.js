import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform your search logic here
    console.log('Searching for:', searchText);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchIconContainer} onPress={handleSearch}>
        <Ionicons name="search" size={24} color="gray" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="gray"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    paddingHorizontal: 16,
    marginTop: 50,
    
  },
  searchIconContainer: {
    marginRight: 8,
    padding:10,
    
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});

export default SearchBar;