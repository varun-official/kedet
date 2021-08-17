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
import db from "../firestore";
import Notice_card from './Notice_card';
import Loading from "./Loading";
import {AuthContext} from "../navigation/AuthProvider";

//import Icon from 'react-native-vector-icons/Ionicons';

const Notice = () => {
  const {user} = React.useContext(AuthContext);
  const [clicked,setClicked] = React.useState(false);
  const [pincode,setPincode] = React.useState(null); 
  const [children,setChildren] = React.useState(null);
    
  React.useEffect(()=>{
    db.collection("users").where('email',"==",user.email).get()
    .then((docs)=>{
        docs.forEach((doc)=>{
           if(doc.data().schoolId !== undefined){
              setPincode(doc.data().schoolId);
              setClicked(true);
           }
        })
        
    }).catch((e)=>{
       console.log(e);
    });               
        
  },[]);
  
  React.useEffect(()=>{
   db.collection("children").where('pincode',"==",pincode).get()
    .then((docs)=>{
        const arr = [];
        docs.forEach((doc)=>{
           arr.push(doc.data());
        })
        setChildren(arr);
    }).catch((e)=>{
       console.log(e);
    });               
        
  },[clicked == true]);
  
  if(children === null) return <Loading/>
  console.log(children);
  console.log(pincode);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {children.map((item,index)=>{
         return(
         <Notice_card
            name={item.name}
            pincode={item.pincode}
            lat={item.latitude}
            lng={item.longitude}
            image={item.image}
         />);
      })}
    </ScrollView>
  );
};

export default Notice;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor:"#2C2E32",
    paddingBottom:100,
  },
});
