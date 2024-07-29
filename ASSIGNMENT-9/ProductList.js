// ProductList.js
import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import { GlobalContext } from './GlobalContext';

const products = [
  { id: '1', name: 'Product 1', price: '$10', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fda2ceae0679611937e6e71f701a36ab' },
  { id: '2', name: 'Product 2', price: '$20', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/299a479a2f7f1f30d09545ca8cc5d162' },
  { id: '3', name: 'Product 3', price: '$30', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/528285ee5ce34d2864ec3b841846f6f9' },
];

const ProductList = () => {
  const { dispatch } = useContext(GlobalContext);

  const addToFavorites = (product) => {
    dispatch({ type: 'ADD_FAVORITE', payload: product });
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <View style={styles.buttonContainer}>
                <Button title="Add to Favorites" onPress={() => addToFavorites(item)} color="#ff6347" />
                <Button title="Add to Cart" onPress={() => addToCart(item)} color="#32cd32" />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4', // Light background color for the container
  },
  product: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff', // White background for each item
    shadowColor: '#000', // Shadow color for elevation effect
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 3, // Elevation for Android
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10, // Rounded corners for the image
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Dark gray color for product name
  },
  price: {
    fontSize: 16,
    color: '#555', // Medium gray color for price
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    marginBottom: 10, // Space between buttons
  },
});

export default ProductList;
