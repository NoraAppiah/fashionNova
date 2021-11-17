import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/landing';
import HomePage from './pages/home';
import ProductDetailPage from './pages/productDetail';
import CartPage from './pages/cart';
import CartProvider from './hooks/cart';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="landingpage" component={LandingPage} />
          <Stack.Screen name="homepage" component={HomePage} />
          <Stack.Screen name="productdetail" component={ProductDetailPage} />
          <Stack.Screen name="cartpage" component={CartPage} />
          <Stack.Screen name="login" component={LoginPage} />
          <Stack.Screen name="signup" component={SignupPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}