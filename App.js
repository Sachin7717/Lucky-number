import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import React from 'react';
import Home from './Screens/Home.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LuckyNumber from './Screens/LuckyNumber.js';

export default function App() {
 const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="LuckyNumber" component={LuckyNumber} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
