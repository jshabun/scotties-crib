import React, {useState, useEffect} from 'react';
import { View, TextInput, Text, StyleSheet, Image, StatusBar, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from './styles';
import updatedProfileData from './EditProfile'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';



const Profile = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);
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

  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Image picker result:", result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      saveImageToStorage(result.assets[0].uri);
    }
  };


  const saveImageToStorage = async (uri) => {
    try {
      console.log(uri)
      // Get the email of the currently logged-in user
      const loggedInUserEmail = await AsyncStorage.getItem('loggedInUserEmail');
      console.log('Logged-in user email:', loggedInUserEmail);
  
      // Retrieve the list of users from AsyncStorage
      const usersJson = await AsyncStorage.getItem('users');
      console.log('Users from AsyncStorage:', usersJson);
      let users = usersJson ? JSON.parse(usersJson) : [];
  
      // Update the image field of the corresponding user
      const updatedUsers = users.map(user => {
        if (user.email === loggedInUserEmail) {
          console.log('Updating user with email:', loggedInUserEmail);
          return { ...user, image: uri }; // Add the image property to the user object
        }
        return user;
      });
  
      // Save the updated users array back to AsyncStorage
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
      console.log('Users after update:', updatedUsers);
    } catch (error) {
      console.error('Error saving image to AsyncStorage:', error);
    }
  };
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
        setImage(currentUser.image || null) 
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
      
      <View style={styles.circle} onTouchEnd={pickImage}>
        <Image
        source={image === null ? require('./assets/freddy.jpg') : { uri: image }}
        style={styles.image}
        />  
      </View>
      <Text style={styles.profileText}>{name}</Text>
      <Text style={styles.bioText}>Year: {year}{'\n'}</Text>
      <Text style={styles.bioText}>Major: {major}{'\n'}</Text>
      <Text style={styles.bioText}>{bio}{'\n'}</Text>
      
      <View style={styles.bar}>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItem')}>
        <Button title="Add a listing!"/>
      </TouchableOpacity>

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
  button: {
    width: '80%',
    backgroundColor: '#97c4e1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
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
  listingsContainer: {
    marginTop: 1,
  },
});

export default Profile;
