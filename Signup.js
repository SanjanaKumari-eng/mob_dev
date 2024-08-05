import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, ImageBackground } from 'react-native';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    // Simulate signup success
    if (username === 'sanjana' && password === 'hello' && email === 'san@3456') {
      onSignup({ username, password });
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0c6dcf71f35660fa5d68864084470eea' }} // Replace with your image URL
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
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Sign Up" onPress={handleSignup} />
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

export default Signup;
