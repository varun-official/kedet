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
  TextInput,
  Dimensions,
  Stack,
  TextArea,
} from 'react-native';

import {Input, FormControl} from 'native-base';

const EditSchool = ({navigation}) => {
  return (
    <View style={styles.scroll_container}>
      <ScrollView>
        <View style={styles.inner_container}>
          <Text style={{fontSize: 20, color: 'white'}}>Edit School</Text>
          <FormControl style={styles.input}>
            <FormControl.Label>School Name:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="Government higher primary school"
              color="white"
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School Address:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="enter the school name"
              color="white"
              value="Kapikad, Mangalore - 575004"
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School pinCode:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="enter the school name"
              color="white"
              value="575004"
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School Medium:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="Kannada"
              color="white"
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School Bank Acc.No:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="2015101004414"
              color="white"
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label color="#D9D2D2">
              School Bank IFSC Code:
            </FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="CNRB0004414"
              color="white"
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School UPI:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="sahyadri@oksbi"
              color="white"
            />
          </FormControl>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 30,
                marginBottom: 0,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.panelInputButtonC}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 30,
                marginBottom: 50,
                marginLeft: 15,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.panelInputButtonv}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditSchool;
const styles = StyleSheet.create({
  scroll_container: {
    flex: 1,
    backgroundColor: '#2C2E32',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 0,
    // zIndex:3000
  },
  inner_container: {
    flex: 1,
    backgroundColor: '#121418',
    width: '100%',
    height: 'auto',
    borderRadius: 20,
    alignItems: 'center',
    padding: 30,
    marginTop: 20,
  },
  input: {
    marginTop: 20,
  },
  panelInputButtonC: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 20,
    width: 130,
    height: 60,
    textAlign: 'center',
  },

  panelInputButtonv: {
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 20,
    width: 130,
    height: 60,
    textAlign: 'center',
  },
});
