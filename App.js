import React, {useEffect, useState} from 'react';
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

import {NavigationContainer} from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons';
import Tabs from './navigation/Tabs';

const App = () => {
  return(
      <NavigationContainer>
      <Tabs />
      
      </NavigationContainer>
  )

}

export default App;
