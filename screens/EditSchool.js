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
import firebase from "firebase";
import "firebase/storage";
import {Input, FormControl, Button} from 'native-base';
import storageSchool from "../storageSchool";
import ImagePicker from 'react-native-image-crop-picker';
import db from "../firestore";
import {AuthContext} from "../navigation/AuthProvider";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './Loading';
const EditSchool = ({navigation,route}) => {
  const [schoolName,setSchoolName] = React.useState(null);
  const [schoolAddress,setSchoolAddress] =React.useState(null);
  const [schoolPinCode,setPinCode] = React.useState(null);
  const [schoolMedium,setMedium] = React.useState(null);
  const [schoolBankAccntNo,setBankAccntNo] = React.useState(null);
  const [schoolIFSCCode,setIFSCCode] = React.useState(null);
  const [schoolUPI,setUPI] = React.useState(null);
  const {user} = React.useContext(AuthContext);
  const [imageURL,setImageURL] = useState(null);
  const [desc,setDesc] = React.useState(null);
  const [image, setImage] = useState(null);
 
  const [isVisible,setIsVisible] = useState(false);
  const [loading,setLoading] = useState(true);
  const {pinCode} = route.params;
  
  React.useEffect(()=>{
    db.collection("school").doc(pinCode).get()
    .then((doc)=>{
       if(doc.exists){
          setSchoolName(doc.data().name);
          setSchoolAddress(doc.data().address);
          setPinCode(doc.data().pincode);
          setMedium(doc.data().medium);
          setBankAccntNo(doc.data().accountNo);
          setIFSCCode(doc.data().ifscCode);
          setUPI(doc.data().upiId);
          setImage(doc.data().image);
          setImage(doc.data().desc);
       }
       setLoading(false);
        
    }).catch((e)=>{
       console.log(e);
    });               
        
  },[]);

  if(loading) return <Loading/>
    
    
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      compressImageQuality: 0.5,
      includeBase64:true
    }).then(image => {
      setImage(image);
      setIsVisible(false);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      compressImageQuality: 0.5,
      includeBase64:true
    }).then(image => {
      setImage(image);
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
                uri: image.path,
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
             <FormControl style={styles.input}>
            <FormControl.Label>School Description:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Enter school description"
              color="white"
              value={desc}
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
              <TouchableOpacity onPress={() => {
                  if(schoolName && schoolAddress && schoolPinCode && schoolMedium && schoolBankAccntNo && schoolIFSCCode && schoolUPI && desc){                
                      AsyncStorage.setItem('@pincode', schoolPinCode);
                       
                      if(image !== null && image.path !== undefined && image.path !== null){            
                          storageSchool(image.path,schoolPinCode).then((url)=>{
                               db.collection("school").doc(schoolPinCode).set({
                                    name: schoolName,
                                    address: schoolAddress,
                                    pincode: schoolPinCode,
                                    medium:schoolMedium,
                                    accountNo:schoolBankAccntNo,
                                    ifscCode:schoolIFSCCode,
                                    upiId:schoolUPI,
                                    desc:desc,
                                    image:url,
                                    date: Date().now()                            
                                },{merge:true})
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
                                          console.log("Error getting documents1: ", error);
                                      })
                                    })
                                 .catch((error) => {
                                    console.error("Error writing document2: ", error);
                                 })
                              })
                          navigation.navigate('Profile',{refresh:true});
                          return;
                      }
                      db.collection("school").doc(schoolPinCode).set({
                                    name: schoolName,
                                    address: schoolAddress,
                                    pincode: schoolPinCode,
                                    medium:schoolMedium,
                                    accountNo:schoolBankAccntNo,
                                    ifscCode:schoolIFSCCode,
                                    upiId:schoolUPI,
                                    image:image,
                                    desc:desc,
                                    date: Date().now()                   
                                },{merge:true})
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
                                          console.log("Error getting documents1: ", error);
                                      })
                                    })
                                 .catch((error) => {
                                    console.error("Error writing document2: ", error);
                                 })
                      navigation.navigate('Profile',{refresh:true});
                  }else{
                      const msg = "Fields cannot be empty"
                      if (Platform.OS === 'android') {
                         ToastAndroid.show(msg, ToastAndroid.SHORT)
                      } else {
                         AlertIOS.alert(msg);
                      }
                  }
                }}>
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


