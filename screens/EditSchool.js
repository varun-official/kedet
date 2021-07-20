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
  Modal,
} from 'react-native';

import {Input, FormControl} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

const EditSchool = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(null);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      compressImageQuality: 0.5,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      setIsVisible(false);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      compressImageQuality: 0.5,
    }).then(image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      setIsVisible(false);
    });
  };

  return (
    <View style={styles.scroll_container}>
      <ScrollView>
        <Modal animationType={'slide'} transparent={true} visible={isVisible}>
          <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.panelTitle}>Upload Photo</Text>
              <Text style={styles.panelSubtitle}>
                Choose Your Profile Picture
              </Text>
            </View>
            <TouchableOpacity
              style={styles.panelButton}
              onPress={takePhotoFromCamera}>
              <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.panelButton}
              onPress={choosePhotoFromLibrary}>
              <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.panelButton}
              onPress={() => setIsVisible(false)}>
              <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.inner_container}>
          <Text style={{fontSize: 20, color: 'white'}}>Edit School</Text>

          {image ? (
            <Image
              source={{
                uri: image,
              }}
              style={{
                width: '100%',
                marginTop: 10,
                height: 150,
              }}
            />
          ) : (
            <Image
              source={{
                uri: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png',
              }}
              style={{
                width: '100%',
                marginTop: 10,
                height: 150,
              }}
            />
          )}

          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text
              style={{
                marginTop: 15,
                borderWidth: 1,
                borderColor: 'red',
                padding: 12,
                fontSize: 20,
                borderRadius: 5,
              }}>
              Take a Snap
            </Text>
          </TouchableOpacity>

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
          <FormControl style={styles.input}>
            <FormControl.Label>School Description:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Government higher primary school"
              color="white"
              multiline={true}
              numberOfLines={5}
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
  input1: {
    marginTop: 20,
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
    marginTop: 'auto',
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
