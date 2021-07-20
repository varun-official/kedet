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
  ToastAndroid,
  Platform,
  AlertIOS,
  Modal
} from 'react-native';
import {Input, FormControl, Button} from 'native-base';
import db from "../firestore";
import {AuthContext} from "../navigation/AuthProvider";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditSchool = ({navigation}) => {
  const [schoolName,setSchoolName] = React.useState("Government higher primary school");
  const [schoolAddress,setSchoolAddress] = React.useState("Kapikad, Mangalore - 575004");
  const [schoolPinCode,setPinCode] = React.useState("575004");
  const [schoolMedium,setMedium] = React.useState("Kannada");
  const [schoolBankAccntNo,setBankAccntNo] = React.useState("2015101004414");
  const [schoolIFSCCode,setIFSCCode] = React.useState("CNRB0004414");
  const [schoolUPI,setUPI] = React.useState("sahyadri@oksbi");
  const {user} = React.useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [isVisible,setIsVisible] = useState(false);

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
                color:"white"
              }}>
              Take a Snap
            </Text>
          </TouchableOpacity>
          <FormControl style={styles.input}>
            {schoolName && <FormControl.Label>School Name:</FormControl.Label>}
            <Input
              variant="outline"
              value={schoolName}
              placeholder="Enter school name"
              onChangeText={(val)=>setSchoolName(val)}
              color="white"
            />
          </FormControl>
          <FormControl style={styles.input}>
            {schoolAddress && <FormControl.Label>School Address:</FormControl.Label>}
            <Input
              variant="outline"
              color="white"
              placeholder="Enter school address"
              value={schoolAddress}
              onChangeText={(val)=>setSchoolAddress(val)}
            />
          </FormControl>
          <FormControl style={styles.input}>
            {schoolPinCode && <FormControl.Label>School pinCode:</FormControl.Label>}
            <Input
              variant="outline"
              color="white"
              keyboardType="numeric"
              placeholder="Enter school pincode"
              value={schoolPinCode}
              onChangeText={(val)=>setPinCode(val)}
            />
          </FormControl>
          <FormControl style={styles.input}>
            {schoolMedium && <FormControl.Label>School Medium:</FormControl.Label>}
            <Input
              variant="outline"
              placeholder="Enter school medium"
              value={schoolMedium}
              onChangeText={(val)=>setMedium(val)}
              color="white"
            />
          </FormControl>
          <FormControl style={styles.input}>
            {schoolBankAccntNo && <FormControl.Label>School Bank Acc.No:</FormControl.Label>}
            <Input
              variant="outline"
              value={schoolBankAccntNo}
              keyboardType="numeric"
              onChangeText={(val)=>setsetBankAccntNo(val)}
              color="white"
              placeholder="Enter school bank account number"
              onChangeText={(val)=>setBankAccntNo(val)}
            />
          </FormControl>
          <FormControl style={styles.input}>
            {schoolIFSCCode && <FormControl.Label color="#D9D2D2">
              School Bank IFSC Code:
            </FormControl.Label>}
            <Input
              variant="outline"
              placeholder="Enter bank IFSC code"
              onChangeText={(val)=>setIFSCCode(val)}
              value={schoolIFSCCode}
              color="white"
            />
          </FormControl>
          <FormControl style={styles.input}>
            {schoolUPI && <FormControl.Label>School UPI:</FormControl.Label>}
            <Input
              variant="outline"
              placeholder="Enter UPI ID"
              value={schoolUPI}
              onChangeText={(val)=>setUPI(val)}
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
              <TouchableOpacity onPress={() => {
                  if(schoolName && schoolAddress && schoolPinCode && schoolMedium && schoolBankAccntNo && schoolIFSCCode && schoolUPI){                
                      AsyncStorage.setItem('@pincode', schoolPinCode); 
                      db.collection("school").doc(schoolPinCode).set({
                          name: schoolName,
                          address: schoolAddress,
                          pincode: schoolPinCode,
                          medium:schoolMedium,
                          accountNo:schoolBankAccntNo,
                          ifscCode:schoolIFSCCode,
                          upiId:schoolUPI
                      })
                      .then(() => {
                          const d = new Date();
                          console.log("School document successfully updated at " + d.toString());
                          db.collection("users").where('email',"==",user.email).get()
                          .then((querySnapshot) => {
                           console.log("User document successfully written at " + d.toString());
                           querySnapshot.forEach((doc) => {
                             doc.ref.update({
                                schoolId:schoolPinCode
                              });
                         });
                     })
                      .catch((error) => {
                         console.log("Error getting documents: ", error);
                      });
                       })
                       .catch((error) => {
                          console.error("Error writing document: ", error);
                      });
                      navigation.navigate('Profile');
                  }else{
                      const msg = "Fields cannot be empty"
                      if (Platform.OS === 'android') {
                         ToastAndroid.show(msg, ToastAndroid.SHORT)
                      } else {
                         AlertIOS.alert(msg);
                      }
                  }
                }
              }>
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

