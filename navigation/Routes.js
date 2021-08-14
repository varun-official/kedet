import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from "firebase";
import {AuthContext} from './AuthProvider';
import Loading from "../screens/Loading";
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import Tabs from './Tabs';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing,setInitializing] = React.useState(true);
  
  const authChange=(user)=>{
    setUser(user);
    if(initializing)setInitializing(false);
  }
    
  React.useEffect(()=>{
    const sub = firebase.auth().onAuthStateChanged(authChange); 
    return sub;
  },[]); 
  
  if(initializing) return <Loading/>;
  
  return (
    <NavigationContainer>{user ? <Tabs /> : <AuthStack />}</NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
