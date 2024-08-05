import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, ImageBackground } from 'react-native';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate login success
    if (username === 'sanjana' && password === 'hello') {
      onLogin(username);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/login_background.jpg' }} // Replace with your image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
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
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for better readability
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: 'white',
  },
});

export default Login;
