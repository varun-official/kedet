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

import {Input, FormControl} from 'native-base';

import Icon from 'react-native-vector-icons/Feather';

const Profile = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#242B2E',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.container_next}>
        <TouchableOpacity>
          <Icon name="users" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inner_container}>
        <View style={styles.inside_main}>
          <Text style={styles.inside_main_text1}>Your Account</Text>
          <Text style={styles.inside_main_text2}>Doner</Text>
        </View>
        <FormControl style={styles.input}>
          <FormControl.Label>Full Name:</FormControl.Label>
          <Input
            variant="outline"
            placeholder="Varun"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </FormControl>
        <FormControl style={styles.input1}>
          <FormControl.Label>Email:</FormControl.Label>
          <Input
            variant="outline"
            placeholder="varunvadda99@gmail.com"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </FormControl>
        <FormControl style={styles.input1}>
          <FormControl.Label>Phone Number:</FormControl.Label>
          <Input
            variant="outline"
            placeholder="8548072149"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </FormControl>
      </View>
      <View style={{top: -130}}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              borderWidth: 1,
              borderColor: '#0D0D0D',
              padding: 15,
              backgroundColor: '#0D0D0D',
            }}>
            + Add Requirement
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container_next: {
    flex: 1,
    backgroundColor: '#242B2E',
    margin: 30,
    flexDirection: 'row-reverse',
    left: 100,
  },
  icon: {
    fontSize: 24,
    paddingLeft: 40,
    color: 'red',
  },
  inner_container: {
    backgroundColor: '#0D0D0D',
    width: '95%',
    height: 470,
    top: -180,
    borderRadius: 20,
    alignItems: 'center',
  },
  inside_main: {
    marginTop: 40,
    flexDirection: 'row',
  },
  inside_main_text1: {
    fontSize: 23,
    left: -40,
    top: 15,
  },
  inside_main_text2: {
    fontSize: 20,
    right: -20,
    backgroundColor: '#242B2E',
    padding: 15,
    borderRadius: 10,
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
  input1: {
    marginTop: 30,
    width: '90%',
  },
});
