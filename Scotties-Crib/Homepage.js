import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@rneui/base';
import { ThemeProvider, createTheme } from '@rneui/themed';

const MarketplaceScreen = () => {
  const categories = ['All', 'Food', 'Clothing', 'Housing'];
  const [searchInput, setSearchInput] = useState('');
  
  const handleSearch = () => {
    // Perform search logic using the searchInput value
    console.log('Performing search for:', searchInput);
  };

  return (
    
    <View style={styles.container}>

      
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmitEditing={handleSearch}
        />
        <View style={styles.categoryButtons}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.column}>
          {/* Placeholder for item image */}
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
        </View>
        <View style={styles.column}>
          {/* Placeholder for item image */}
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
        </View>
        <View style={styles.column}>
          {/* Placeholder for item image */}
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return <ThemeProvider theme={theme}>{/* ... */}</ThemeProvider>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: 'lightgray',
  },
  searchBar: {
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  categoryButtonText: {
    color: 'white',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  column: {
    flex: 1,
    marginRight: 16,
  },
  itemBox: {
    height: 100,
    backgroundColor: 'lightblue',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  footerButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'lightgray',
    borderRadius: 8,
  },
  footerButtonText: {
    color: 'black',
  },
});


// const App = () => {
//   return <Button title="Hello World" />;
// };

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

export default MarketplaceScreen;

//export default App;