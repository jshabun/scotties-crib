import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { globalStyles } from './styles';


const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          source={require('./freddy.jpg')}
          style={styles.image}
          />
        
        </View>
        <Text style={styles.profileText}>Freddy F.</Text>
        <Text style={styles.bioText}>Har har har har</Text>
      
      
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0b2138',



  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 75,
    borderWidth: 2.7,
    backgroundColor: 'lightgrey',
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75, 
  },
  profileText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bioText: {
    color: 'white',
    fontSize: 12,
    alignSelf: 'flex-start',
  },
});

export default Profile;
