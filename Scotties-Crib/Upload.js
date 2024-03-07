import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UploadScreen = () => {
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleUpload = () => {
    // Logic to handle the upload process
    console.log('Image:', image);
    console.log('Price:', price);
    console.log('Description:', description);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Upload an Image of the Item:</Text>
      <TextInput
        style={styles.input}
        value={image}
        onChangeText={setImage}
        placeholder="Image URL"
      />

      <Text style={styles.headerText}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />

      <Text style={styles.headerText}>Item Description:</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline
      />

      <Button style = "alignItems:center" title="Upload" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: 'white',
    padding: 20,
  },
  headerText: {
    fontSize: 25,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  descriptionInput: {
    height: 100,
  },
});

export default UploadScreen;