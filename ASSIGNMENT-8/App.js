// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoriteProvider } from './FavoriteContext';
import ProductScreen from './ProductScreen';
import FavoriteScreen from './FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#6200ea' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen
      name="Products"
      component={ProductScreen}
      options={{ title: 'Product List' }}
    />
    <Stack.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{ title: 'My Favorites' }}
    />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: { backgroundColor: '#e6e6e6' },
      headerStyle: { backgroundColor: '#6200ea' },
      headerTintColor: '#fff',
    }}
  >
    <Drawer.Screen
      name="Home"
      component={StackNavigator}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="home-outline" color={color} size={size} />
        ),
      }}
    />
    <Drawer.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="heart-outline" color={color} size={size} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </FavoriteProvider>
  );
}
