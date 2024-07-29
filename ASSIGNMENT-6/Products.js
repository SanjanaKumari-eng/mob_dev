import React, { useState } from 'react';
import { View, Button, FlatList, ScrollView, Text, Image, StyleSheet, SafeAreaView, SectionList } from 'react-native';

const products = [
  { id: '1', title: 'Shoes', description: 'Comfortable running shoes', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/39b959ade4e619eb286e1a3dae39a85e' },
  { id: '2', title: 'Dress', description: 'Stylish summer dress', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6ca8d86d6a5a66f373264ff27e862c36' },
];

const sections = [
  { title: 'Shoes', data: [{ id: '1', title: 'Running Shoes', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fc465dfd4141011e87ab581c8da00f0f' }] },
  { title: 'Dresses', data: [{ id: '2', title: 'Summer Dress', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6ca8d86d6a5a66f373264ff27e862c36' }] },
];

const ProductCard = ({ title, description, image }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default function Products() {
  const [useFlatList, setUseFlatList] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Button title={`Switch to ${useFlatList ? 'SectionList' : 'FlatList'}`} onPress={() => setUseFlatList(!useFlatList)} />
      {useFlatList ? (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard {...item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <ProductCard {...item} />}
          renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
