import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, Button} from "react-native";
import { globalStyles } from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [bio, setBio] = useState('');

  
  const saveProfile = async () => {
    try {
      // Retrieve the existing users from AsyncStorage
      const existingUsersJson = await AsyncStorage.getItem('users');
      const existingUsers = existingUsersJson ? JSON.parse(existingUsersJson) : [];
      
      // Retrieve the currently logged-in user's email from AsyncStorage
      const loggedInUserEmail = await AsyncStorage.getItem('loggedInUserEmail');
      console.log(loggedInUserEmail)
  
      // Find the index of the logged-in user in the existing users array
      const userIndex = existingUsers.findIndex(user => user.email === loggedInUserEmail);
      if (userIndex !== -1) {
        // Update the user's profile data
        existingUsers[userIndex].name = name;
        existingUsers[userIndex].year = year;
        existingUsers[userIndex].major = major;
        existingUsers[userIndex].bio = bio;
        // console.log(name)
        // console.log(year)
        // console.log(major)
        // console.log(bio)
        // console.log(existingUsers[userIndex])
        // Save the updated users array back to AsyncStorage
        await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
  
        console.log('Profile data saved successfully.');
  
        // Navigate back to the Profile screen
        navigation.navigate('Profile');
      } else {
        console.log('Logged-in user not found in AsyncStorage.');
        // Handle case where logged-in user is not found
      }
    } catch (error) {
      console.error('Error saving profile data:', error);
      // Handle error while saving profile data
    }
  };





  
    return (
        <View style={styles.container}>
            <View style={styles.bar}>

            </View>
            
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Name"
                placeholderTextColor="#A9A9A9"
                />
              </View>
              <View style={styles.inputLine} />
            </View>
  
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                style={styles.input}
                value={year}
                onChangeText={setYear}
                placeholder="Year"
                placeholderTextColor="#A9A9A9"
                />
              </View>
              <View style={styles.inputLine} />
            </View>
  
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                style={styles.input}
                value={major}
                onChangeText={setMajor}
                placeholder="Major"
                placeholderTextColor="#A9A9A9"
                />
              </View>
              <View style={styles.inputLine} />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                style={styles.input}
                value={bio}
                onChangeText={setBio}
                placeholder="Type up your bio here!"
                placeholderTextColor="#A9A9A9"
                />
              </View>
              <View style={styles.inputLine} />
            </View>

            <TouchableOpacity style={styles.button} onPress={saveProfile}>
                <Button title="Save"/>
            </TouchableOpacity>
      </View>
    );
  };

export default EditProfile


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#0b2138',
      },
    inputContainer: {
        marginBottom: 20,
    },
    inputWrapper: {
        position: 'relative',
    },
    optionText: {
        color: 'white',
        alignSelf: 'flex-start',
        fontSize: 30,
        marginTop: 20,
    },
    bar: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
      },
    input: {
        height: 40,
        fontSize: 16,
        color: '#FFFFFF',
        borderBottomWidth: 0, 
    },
    inputLine: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#A9A9A9',
      },
    button: {
      width: '80%',
      backgroundColor: '#97c4e1',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },


});