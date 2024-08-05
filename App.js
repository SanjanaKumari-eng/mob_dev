// App.js
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcome';
import Product from './Product';

export default function App() {
  const [currentPage, setCurrentPage] = useState('gettingStarted');
  const [username, setUsername] = useState('');

  const handleSignup = ({ username, password }) => {
    // Simulate signup
    setCurrentPage('login');
    setUsername(username);
  };

  const handleLogin = (username) => {
    setCurrentPage('welcome');
    setUsername(username);
  };

  const handleGoToProducts = () => {
    setCurrentPage('product');
  };

  const handleLogout = () => {
    setCurrentPage('gettingStarted');
    setUsername('');
  };

  return (
    <View style={styles.container}>
      {currentPage === 'gettingStarted' && (
        <Button title="Get Started" onPress={() => setCurrentPage('signup')} />
      )}
      {currentPage === 'signup' && <Signup onSignup={handleSignup} />}
      {currentPage === 'login' && <Login onLogin={handleLogin} />}
      {currentPage === 'welcome' && (
        <Welcome username={username} onGoToProducts={handleGoToProducts} onLogout={handleLogout} />
      )}
      {currentPage === 'product' && <Product username={username} onLogout={handleLogout} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
