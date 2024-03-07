import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './homecomponents/Header';
import Footer from './homecomponents/Footer';
import ProductCard from './homecomponents/ProductCard';
import SearchBar from './homecomponents/SearchBar';


const products = [
  {
    id: 1,
    imageUrl: require('./assets/ucrbluehoodie.png'),
    name: 'UCR Blue Logo Hoodie',
    description: 'Barely used UCR logo hoodie, in great condition',
  },
  {
    id: 2,
    imageUrl: require('./assets/ucrbluehat.png'),
    name: 'UCR Logo Hat',
    description: 'Brand new hat, no longer needed',
  },
  // Add more products as needed
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <SearchBar />
        <View style={styles.productList}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              description={product.description}
            />
          ))}
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', // Light blue background color
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
