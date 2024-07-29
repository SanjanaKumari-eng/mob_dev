import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backgroundImage = 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e90c79d7674210e5785f2790669956ad'; // Replace with your background image URL

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('sanjana');
  const [password, setPassword] = useState('hloo');
  const [email, setEmail] = useState('san@3456');

  const handleSignUp = async () => {
    try {
      await AsyncStorage.setItem('@user_details', JSON.stringify({ username, password, email }));
      navigation.navigate('Login');
    } catch (error) {
      console.error('Failed to store user details:', error);
    }
  };

  return (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#666"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxWidth: 350,
    

    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // More prominent shadow for Android
    alignItems: 'center', // Center align items
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black', // Darker color for better contrast
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'black', // Light gray border color
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: 'pink', // White background for input fields
  },
  button: {
    backgroundColor: '#6200ee', // Purple button color
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // White color for text
    fontWeight: 'bold',
  },
});

export default SignUp;
