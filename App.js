import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import Tabs from "./navigation/Tabs";
import {NavigationContainer} from '@react-navigation/native';



const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
