import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backgroundImage = 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e8740f2bd9ede164ed5a96b6c838eae9'; // Replace with your background image URL

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('sanjana');
  const [password, setPassword] = useState('hloo');

  const handleLogin = async () => {
    const storedUser = JSON.parse(await AsyncStorage.getItem('@user_details'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      navigation.navigate('HomeTabs');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' if you want the image to cover the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    
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
    color: 'white', // Darker color for better contrast
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'pink', // Light gray border color
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

export default Login;
