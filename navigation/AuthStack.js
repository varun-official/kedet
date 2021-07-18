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

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Loading" component={Loading}></Stack.Screen>
      <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
