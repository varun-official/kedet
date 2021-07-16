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

const EditSchool = () => {
  return (
    <View style={styles.scroll_container}>
      <ScrollView>
        <View style={styles.inner_container}>
          <Text style={{fontSize: 20}}>Edit School</Text>
          <FormControl style={styles.input}>
            <FormControl.Label>School Name:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="Government higher primary school"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School Address:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="enter the school name"
              value="Kapikad, Mangalore - 575004"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School Medium:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="Kannada"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School Bank Acc.No:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="2015101004414"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School Bank IFSC Code:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="CNRB0004414"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>School UPI:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              value="sahyadri@oksbi"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </FormControl>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 30,
              marginBottom: 50,
            }}>
            <TouchableOpacity>
              <Text style={styles.panelInputButtonv}>save</Text>
            </TouchableOpacity>
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
    backgroundColor: '#242B2E',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 50,
  },
  inner_container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
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
