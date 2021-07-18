import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {AuthContext} from './AuthProvider';

import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import Tabs from './Tabs';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);

  return (
    <NavigationContainer>{user ? <Tabs /> : <AuthStack />}</NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
