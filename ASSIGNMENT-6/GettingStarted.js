import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

export default function GettingStarted({ navigation }) {
  return (
    <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0c6dcf71f35660fa5d68864084470eea' }} style={styles.background}>
      <View style={styles.container}>
              <Text style={styles.text}>Welcome Sanjana!!..</Text>
        <Text style={styles.text}>Welcome to the App</Text>
        <Button title="Get Started" onPress={() => navigation.navigate('SignUp')} />
        <Button title="View Products" onPress={() => navigation.navigate('Products')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
});
