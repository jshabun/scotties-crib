import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ imageUrl, name, description }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.button}>Add to Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff', // White card background color
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2, // Shadow on Android
    shadowColor: '#000000', // Shadow on iOS
    shadowOpacity: 0.3, // Shadow on iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    fontSize: 16,
    color: '#007bff', // Blue button color
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default ProductCard;
