import React, { useState, useEffect } from 'react';
import { Button, ScrollView, Text, View, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import ProductCard from './ProductCard';

const products = [
  {
    title: "Sample Product 1",
    description: "Description for product 1.",
    price: "$29.99",
    discount: "10% OFF",
  },
  {
    title: "Sample Product 2",
    description: "Description for product 2.",
    price: "$39.99",
    discount: "15% OFF",
  },
];

const Product = ({ username, onLogout }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/product_background.jpg' }} // Replace with your image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Hello, {username}</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </ScrollView>
        )}
        <Button title="Log Out" onPress={onLogout} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.8)', // Semi-transparent background for readability
    borderRadius: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Product;
