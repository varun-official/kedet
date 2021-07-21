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
  Toast,
  AlertIOS,
  Platform,
  ToastAndroid,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import db from "../firestore";
import {Input, FormControl} from 'native-base';
import storageMissingChild from "../storageMissingChild";

const MissingChild = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [childName,setChildName] = React.useState();
  const [landMark,setLandMark] = React.useState();
  const [pincode,setPinCode] = React.useState();
  
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      compressImageQuality: 0.5,
    }).then(image => {
      setImage(image.path);
    });
  };

  return (
    <View style={styles.scroll_container}>
      <ScrollView>
        <View style={styles.inner_container}>
          <Text style={{fontSize: 20, marginBottom: 20, marginTop: -20, color:"white"}}>
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
              placeholder="Enter the name(optional)"
              value={childName}
              onChangeText={(val)=>setChildName(val)}
              color="white"
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>LandMark:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Enter the LandMark"
              value={landMark}
              onChangeText={(val)=>setLandMark(val)}
              color="white"
            />
          </FormControl>
          <FormControl style={styles.input}>
            <FormControl.Label>Pincode:</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Enter the Pincode"
              value={pincode}
              keyboardType="numeric"
              onChangeText={(val)=>setPinCode(val)}
              color="white"
            />
          </FormControl>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 30,
              marginBottom: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                setImage(null);
                navigation.navigate("Home");
              }}>
              <Text style={styles.panelInputButtonC}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              if(landMark && pincode && image!==undefined){ 
                 storageMissingChild(Date.now(),image).then((url)=>{
                   db.collection("children").add({
                      name:(childName !== undefined && childName !== null ? childName : " "),
                      landMark:landMark,
                      pincode:pincode,
                      image:url == undefined ? null : url
                   })
                   .then(() => {
                      const d = new Date();
                      console.log("School document successfully updated at " + d.toString());   
                    })
                    .catch((error) => {
                       console.log("Error getting documents: ", error);
                    });
                    navigation.navigate("Home");
                    setChildName();
                    setLandMark();
                    setPinCode();
                }).catch(err=>console.log(err));
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
    color:"white"
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

