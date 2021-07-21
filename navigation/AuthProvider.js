import React, {useState, useEffect, createContext} from 'react';
import firebase from "firebase";
import {
      ToastAndroid,
      Platform,
      AlertIOS,
    } from 'react-native';
//import auth

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{
       user, 
       setUser,
       login: async (email,password)=>{
           try{
             await firebase.auth().signInWithEmailAndPassword(email, password);
           }catch(e){
              console.log(e);
              const msg = e
              if (Platform.OS === 'android') {
                ToastAndroid.show(msg, ToastAndroid.SHORT)
              } else {
                AlertIOS.alert(msg);
            }
          }
       },
       register: async (email,password)=>{
           try{
             await firebase.auth().createUserWithEmailAndPassword(email, password);
           }catch(e){
             console.log(e);
             const msg = e
             if (Platform.OS === 'android') {
                ToastAndroid.show(msg, ToastAndroid.SHORT)
             } else {
                AlertIOS.alert(msg);
             }
           }
       },
       
       logout: async ()=>{
          try{
            await firebase.auth().signOut();
          }catch(e){
            console.log(e);
          } 
       }
    }}>
      {children}
    </AuthContext.Provider>
  );
};

