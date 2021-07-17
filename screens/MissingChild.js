import {Avatar} from 'native-base';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import {Input, FormControl} from 'native-base';

const MissingChild = ({navigation}) => {
  const [image, setImage] = useState(null);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.5,
    }).then(image => {
      setImage(image.path);
    });
  };

  return (
    <View style={styles.scroll_container}>
      <ScrollView>
        <View style={styles.inner_container}>
          <Text style={{fontSize: 20, marginBottom: 20, marginTop: -20}}>
            Add School Missing Child
          </Text>
          {image ? (
            <Avatar
              source={{
                uri: image,
              }}
              size="2xl"
            />
          ) : (
            <Avatar
              source={{
                uri: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png',
              }}
              size="2xl"
            />
          )}

          <TouchableOpacity onPress={takePhotoFromCamera}>
            <Text style={styles.inside_main_text2}>Take a Snap</Text>
          </TouchableOpacity>
          <FormControl style={styles.input}>
            <FormControl.Label>Name:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="enter the name(optinal)"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>LandMark:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Enter the LandMark"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>PinCode:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Enter the pincode"
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
              marginBottom: 0,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.panelInputButtonC}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.panelInputButtonv}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MissingChild;

const styles = StyleSheet.create({
  scroll_container: {
    flex: 1,
    backgroundColor: '#2C2E32',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 0,
  },
  inner_container: {
    flex: 1,
    backgroundColor: '#121418',
    width: '100%',
    height: 'auto',
    borderRadius: 20,
    alignItems: 'center',
    padding: 50,
    marginTop: 20,
  },
  preview: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inside_main_text2: {
    fontSize: 20,
    backgroundColor: '#242B2E',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  input: {
    marginTop: 20,
    width: '100%',
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
    marginLeft: 20,
    width: 130,
    height: 60,
    textAlign: 'center',
  },
});
