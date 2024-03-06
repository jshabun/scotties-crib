import React, {useState, useEffect} from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { globalStyles } from './styles';
import updatedProfileData from './EditProfile'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Profile = ({ navigation, route }) => {
  const [updatedProfileData, setUpdatedProfileData] = useState({
    name: 'Initial',
    year: 'Initial',
    major: 'Initial'
  });

  useEffect(() => {
    // Load profile data when component mounts
    loadProfileData();
  }, []);

  useEffect(() => {
    // Save profile data whenever it changes
    saveProfileData();
  }, [updatedProfileData]); // Save whenever updatedProfileData changes

  useEffect(() => {
    if (route.params && route.params.updatedProfileData) {
      setUpdatedProfileData(route.params.updatedProfileData);
    }
  }, [route.params]);

  const loadProfileData = async () => {
    try {
      const savedProfileData = await AsyncStorage.getItem('profileData');
      if (savedProfileData) {
        setUpdatedProfileData(JSON.parse(savedProfileData));
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
  };

  const saveProfileData = async () => {
    try {
      await AsyncStorage.setItem('profileData', JSON.stringify(updatedProfileData));
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('EditProfile', { currentProfileData: updatedProfileData })}>
          <Text style={styles.linkText}>Edit</Text>

        </TouchableOpacity>
      </View>
      <View style={styles.circle}>
        <Image
          source={require('./assets/freddy.jpg')}
          style={styles.image}
          />
        
        </View>
        <Text style={styles.profileText}>{updatedProfileData.name}</Text>
        <Text style={styles.bioText}>Year: {updatedProfileData.year}{'\n'}</Text>
        <Text style={styles.bioText}>Major: {updatedProfileData.major}{'\n'}</Text>

        <View style={styles.bar}>

        <Text 
      style={globalStyles.linkText}
      onPress={() => navigation.navigate('AddItem')}
      >List items for sale</Text>

        </View>
        <Text
      style={globalStyles.linkText}
      onPress={() => navigation.navigate('Login')}
      >Back to login</Text>
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
  bar: {
    padding: 21,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
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
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  linkText: {
    color: '#97c4e1',
    marginTop: 17,
    textAlign: 'center',
    fontSize: 20, 
    textDecorationLine: 'underline',
  },
  editButton: {
    padding: 10,
  },
});

export default Profile;
