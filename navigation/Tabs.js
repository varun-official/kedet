import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import db from "../firestore";
const Stack = createStackNavigator();
import {AuthContext} from "./AuthProvider";
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

import Loading from '../screens/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import {NativeBaseProvider} from 'native-base';
import Home from '../screens/Home';
import SchoolDesc from '../screens/School_desc';
import Notice from '../screens/Notice';
import Profile from '../screens/Profile';
import Socialmedia from '../screens/Socialmedia';
import EditSchool from '../screens/EditSchool';
import MissingChild from '../screens/MissingChild';
import Donate from '../screens/Donate';
import HomeLoading from '../screens/HomeLoading';

const stackScrenHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="SchoolDesc" component={SchoolDesc}></Stack.Screen>  
      <Stack.Screen name="Donate" component={Donate}></Stack.Screen>
    </Stack.Navigator>
  );
};
const stackScrenProfile = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
      <Stack.Screen name="EditSchool" component={EditSchool}></Stack.Screen>
    </Stack.Navigator>
  );
};
const Tabs = () => {
  const {user} = React.useContext(AuthContext);
  const [isHead,setIsHead] = React.useState(null);
  const [load,setLoading] = React.useState(true);
  
  React.useEffect(()=>{
    db.collection("users").where('email',"==",user.email).get()
    .then((docs)=>{
        docs.forEach((doc)=>{
           if(doc.data().role == "1"){
             setIsHead(true);
             return;
           }else{
              setIsHead(false);
           }  
        });
    }).catch((e)=>{
       console.log(e);
    });               
        
  },[]);
  
  if(isHead == null){
    setTimeout(function(){
      setLoading(false);
    },2000); 
  }
  
  if(load)  
    return <HomeLoading/>
  
  if(!load)
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true,
          style: {
            position: 'absolute',
            bottom: 0,
            elevation: 0,
            backgroundColor: '#000000',
            height: 60,
            borderTopWidth:0
          },
        }}>
        <Tab.Screen
          name="Home"
          component={stackScrenHome}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="home"
                  style={{
                    fontSize: 25,
                    color: focused ? 'white' : '#adadad',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'white' : '#adadad',
                    fontSize: 12,
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}></Tab.Screen>
        {/*<Tab.Screen
          name="Socialmedia"
          component={Socialmedia}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="people-circle-outline"
                  style={{
                    fontSize: 25,
                    color: focused ? 'white' : '#adadad',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'white' : '#adadad',
                    fontSize: 12,
                  }}>
                  SocialMedia
                </Text>
              </View>
            ),
          }}></Tab.Screen>*/}   
        <Tab.Screen
          name= {!isHead ? "Report" : "Notification"} 
          component={!isHead ? MissingChild : Notice}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={!isHead ? "add-circle" : "alert-circle"}
                  style={{
                    fontSize: 25,
                    color: focused ? 'white' : '#adadad',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'white' : '#adadad',
                    fontSize: 12,
                  }}>
                  {!isHead ? "Report" : "Notification"}
                </Text>
              </View>
            ),
          }}></Tab.Screen>

        <Tab.Screen
          name="Profile"
          component={stackScrenProfile}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="person"
                  style={{
                    fontSize: 25,
                    color: focused ? 'white' : '#adadad',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'white' : '#adadad',
                    fontSize: 12,
                  }}>
                  Profile
                </Text>
              </View>
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    </NativeBaseProvider>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
