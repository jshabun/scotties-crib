import React, {useState, useEffect} from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { globalStyles } from './styles';
import updatedProfileData from './EditProfile'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';



const ProfileScreen = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [bio, setBio] = useState('');
  // const [updatedProfileData, setUpdatedProfileData] = useState({
  //   name: '',
  //   year: '',
  //   major: ''
  // });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadProfileData();
    });
  
    return unsubscribe;
  }, [navigation]);

  // useEffect(() => {
  //   // Save profile data whenever it changes
  //   saveProfileData();
  // }, [updatedProfileData]); // Save whenever updatedProfileData changes

  // useEffect(() => {
  //   if (route.params && route.params.updatedProfileData) {
  //     setUpdatedProfileData(route.params.updatedProfileData);
  //   }
  // }, [route.params]);

  const loadProfileData = async () => {
    try {
      // Retrieve the currently logged-in user's email from AsyncStorage
      const loggedInUserEmail = await AsyncStorage.getItem('loggedInUserEmail');
      console.log('loading data')
      // Retrieve the list of users from AsyncStorage
      const usersJson = await AsyncStorage.getItem('users');
      const users = usersJson ? JSON.parse(usersJson) : [];
  
      // Find the user with the matching email
      const currentUser = users.find(user => user.email === loggedInUserEmail);
  
      if (currentUser) {
        // Set profile data based on the current user's information
        setName(currentUser.name || 'Edit your profile!');
        setYear(currentUser.year || '');
        setMajor(currentUser.major || '');
        setBio(currentUser.bio || '');
      } else {
        console.log('User not found');
        // Handle case where the user is not found (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
  };

  // const saveProfileData = async () => {
  //   try {
  //     await AsyncStorage.setItem('profileData', JSON.stringify(updatedProfileData));
  //   } catch (error) {
  //     console.error('Error saving profile data:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.linkText}>Edit</Text>

        </TouchableOpacity>
      </View>
      <View style={styles.circle}>
        <Image
          source={require('./assets/freddy.jpg')}
          style={styles.image}
          />
        
        </View>
        <Text style={styles.profileText}>{name}</Text>
        <Text style={styles.bioText}>Year: {year}{'\n'}</Text>
        <Text style={styles.bioText}>Major: {major}{'\n'}</Text>

        <View style={styles.bar}>

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

export default ProfileScreen;
