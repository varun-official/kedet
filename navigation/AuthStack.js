import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Loading from '../screens/Loading';
import SignIn from '../screens/SignIn';
import Register from '../screens/Register';


const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="Loading" component={Loading}></Stack.Screen>
      <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
   </Stack.Navigator>
  );
};

export default AuthStack;
