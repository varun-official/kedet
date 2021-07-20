import React, {useEffect, useState} from 'react';
import * as firebase from "firebase/app";
import Tabs from "./navigation/Tabs";
import {NavigationContainer} from '@react-navigation/native';
import Providers from './navigation';

const App = () => {
  return <Providers />;
};

export default App;
