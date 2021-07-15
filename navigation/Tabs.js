import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
const Tab = createBottomTabNavigator();
import {NativeBaseProvider} from 'native-base';
import Home from '../screens/Home';
import SchoolDesc from '../screens/School_desc';
import Notice from '../screens/Notice';
import Profile from '../screens/Profile';
import Socialmedia from '../screens/Socialmedia';

const stackScrenHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="SchoolDesc" component={SchoolDesc}></Stack.Screen>
    </Stack.Navigator>
  );
};

const Tabs = () => {
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
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 70,
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
        <Tab.Screen
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
          }}></Tab.Screen>
        <Tab.Screen
          name="Notice"
          component={Notice}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="mail-unread"
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
                  Notice
                </Text>
              </View>
            ),
          }}></Tab.Screen>

        <Tab.Screen
          name="Profile"
          component={Profile}
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