import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
const Stack = createStackNavigator();
import Loading from '../screens/Loading';
import Register from '../screens/Register';
import Login from '../screens/Login';

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={"Register"}>      
      <Stack.Screen name="Login" options={{header: ()=>null}} component={Login}></Stack.Screen>
      <Stack.Screen name="Register" options={{header: ()=>null}} component={Register}></Stack.Screen>
   </Stack.Navigator>
  );
};

export default AuthStack;
