// HomeTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './ProductList';
import Favorites from './Favorites';
import Cart from './Cart';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductList} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
