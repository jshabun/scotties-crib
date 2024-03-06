import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, Button} from "react-native";
import { globalStyles } from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';

const EditProfile = ({ navigation, route }) => {
  const [name, setName] = useState(route.params?.currentProfileData?.name || '');
  const [year, setYear] = useState(route.params?.currentProfileData?.year || '');
  const [major, setMajor] = useState(route.params?.currentProfileData?.major || '');
  const [bio, setBio] = useState(route.params?.currentProfileData?.bio || '');
  
  
  const saveProfile = () => {
    // Save the updated profile data
        const updatedProfileData = {
          name: name,
          year: year,
          major: major,
          bio: bio,
          // Other profile fields...
        };
    
        // Navigate back to Profile screen and pass the updated data
        navigation.navigate('Profile', { updatedProfileData: updatedProfileData });
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