import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddItem = ({ navigation, route }) => {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const saveItem = () => {
        // Save the updated profile data
        const updatedProfileData = {
          item: item,
          price: price,
          image: image,
          // Other profile fields...
        };

    navigation.navigate('Profile', { updatedProfileData });
    };

    return (
        <View style={styles.container}>
            <View style={styles.bar}>

            </View>
            <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
                <TextInput
                style={styles.input}
                value={item}
                onChangeText={setItem}
                placeholder="Item"
                placeholderTextColor="#A9A9A9"
                />
            </View>
            <View style={styles.inputLine} />
            </View>
  
            <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
                <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="Price"
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

  export default AddItem

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

      imagePicker: {
        // Style for your image picker button
        backgroundColor: '#ddd',
        padding: 10,
        marginBottom: 10,
    },

});