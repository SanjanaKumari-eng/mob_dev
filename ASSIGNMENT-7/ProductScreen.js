// ProductScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const products = [
  { id: 1, title: 'Product 1', description: 'Description 1', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/7860472244c7cb7d56899d26b9de86c9' },
  { id: 2, title: 'Product 2', description: 'Description 2', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9e408d86f99cd2b743a5457e9c636175' },
  // Add more products here
];

const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
      <Button
        title="Go to Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductScreen;
