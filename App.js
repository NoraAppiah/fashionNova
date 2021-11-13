import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/landing';
import HomePage from './pages/home';
import ProductDetailPage from './pages/productDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="landingpage" component={LandingPage} />
        <Stack.Screen name="homepage" component={HomePage} />
        <Stack.Screen name="productdetail" component={ProductDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}