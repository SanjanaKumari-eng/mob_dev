import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const backgroundImage = 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e5feca10457b5022be5832911567dcca'; // Replace with your background image URL

const GettingStarted = ({ navigation }) => {
  return (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the App!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     // Darker semi-transparent overlay for better text visibility
    padding: 20,
    borderRadius: 15,
    margin: 20,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white', // White color for text
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'pink', // Tomato color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black', // White color for button text
    fontWeight: 'bold',
  },
});

export default GettingStarted;
