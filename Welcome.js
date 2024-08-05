import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Switch } from 'react-native';

const Welcome = ({ username, onGoToProducts, onLogout }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ImageBackground
      source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0c6dcf71f35660fa5d68864084470eea' }} // Replace with your image URL
      style={styles.background}
    >
      <View style={[styles.container, { backgroundColor: isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' }]}>
        <Text style={[styles.header, { color: isDarkMode ? 'white' : 'black' }]}>Welcome, {username}</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        <Button title="Go to Product Page" onPress={onGoToProducts} />
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
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Welcome;
