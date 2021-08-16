import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {Input, FormControl} from 'native-base';

import {AuthContext} from '../navigation/AuthProvider';
import AddNewUser from './AddNewUser';

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const {register} = React.useContext(AuthContext);
  function validatePassword() {
    var p = password,
        errors = [];
    if (p.length < 8) {
        const msg = "Your password must be at least 8 characters";
        errors.push("Your password must be at least 8 characters"); 
        
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            AlertIOS.alert(msg);
        }
    }
    else if (p.search(/[a-z]/i) < 0) {
        const msg = "Your password must contain at least one letter.";
        errors.push("Your password must contain at least one letter.");

        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            AlertIOS.alert(msg);
        }
    }
    else if (p.search(/[0-9]/) < 0) {
        const msg = "Your password must contain at least one digit.";
        errors.push("Your password must contain at least one digit."); 
        
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            AlertIOS.alert(msg);
        }
    }
    if (errors.length > 0) {
        return false;
    }
    return true;
  }
  return (
    <NativeBaseProvider>
      <ScrollView
        style={{flex: 1, backgroundColor: '#2C2E32'}}
        showsHorizontalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/back.jpg')}
          style={{
            height: Dimensions.get('window').height / 2.4,
          }}>
          <View style={styles.brandview}>
            <Text style={styles.brandText}>Kedet</Text>
          </View>
        </ImageBackground>
        <View style={styles.bottomview}>
          <View style={{padding: 10}}>
            <Text style={{color: '#fff', fontSize: 30, textAlign: 'center', marginTop:30,fontWeight:"700"}}>
              Welcome
            </Text>
            <View style={{marginTop: 20}}>
              <FormControl style={{borderColor: '#2C2E32'}}>
                <FormControl.Label style={{paddingLeft: 10}}>
                 <Text style={{color:"#E6E6E6"}}>
                    Email:
                 </Text>
                </FormControl.Label>
                <Input
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#5DA3FA',
                    padding: 10,
                  }}
                  _light={{
                      color: "#AAAAAA",
                  }}     
                  placeholderTextColor="#CAD5E2"
                  variant="outline"
                  placeholder="Enter the email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={email1 => setEmail(email1)}
                />
              </FormControl>
              <FormControl style={{borderColor: '#2C2E32', marginTop: 15}}>
                <FormControl.Label style={{paddingLeft: 10}}>
                  <Text style={{color:"#E6E6E6"}}>
                     Phone:
                  </Text>
                </FormControl.Label>
                <Input
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#5DA3FA',
                    padding: 10,
                  }}
                  _light={{
                      color: "#AAAAAA",
                  }}     
                  placeholderTextColor="#CAD5E2"
                  variant="outline"
                  placeholder="Enter the phone number"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={phone => setPhone(phone)}
                />
              </FormControl>
              <FormControl style={{borderColor: '#2C2E32', marginTop: 15}}>
                <FormControl.Label style={{paddingLeft: 10}}>
                  <Text style={{color:"#E6E6E6"}}>
                    Name:
                  </Text>
                </FormControl.Label>
                <Input
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#5DA3FA',
                    padding: 10,
                  }}
                  _light={{
                      color: "#AAAAAA",
                  }}     
                  placeholderTextColor="#CAD5E2"
                  variant="outline"
                  placeholder="Enter the name"
                  keyboardType="name-phone-pad"
                  value={name}
                  onChangeText={name => setName(name)}
                />
              </FormControl>
              <FormControl style={{marginTop: 15}}>
                <FormControl.Label style={{paddingLeft: 10}}>
                 <Text style={{color:"#E6E6E6"}}>
                   Password:
                 </Text>
                </FormControl.Label>
                <Input
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#5DA3FA',
                    padding: 10,
                  }}
                  _light={{
                      color: "#AAAAAA",
                  }}     
                  placeholderTextColor="#CAD5E2"
                  variant="outline"
                  placeholder="Enter the password"
                  type="password"
                  value={password}
                  onChangeText={pass => setPassword(pass)}
                />
              </FormControl>
              <FormControl style={{marginTop: 15}}>
                <FormControl.Label style={{paddingLeft: 10}}>
                 <Text style={{color:"#E6E6E6"}}>
                  Re-enter password:
                 </Text>
                </FormControl.Label>
                <Input
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#5DA3FA',
                    padding: 10,
                  }}
                  _light={{
                      color: "#AAAAAA",
                  }}     
                  placeholderTextColor="#CAD5E2"
                  variant="outline"
                  placeholder="Enter the password"
                  type="password"
                  value={confirmPassword}
                  onChangeText={pass => setConfirmPassword(pass)}
                />
              </FormControl>
            </View>
            <TouchableOpacity  
            onPress={()=>{
            if(password === confirmPassword){
              if(validatePassword()){
                AddNewUser(name, email, phone).then(()=>{            
                  register(email,password);
                });
              }
            }
            else {
             const msg = "Passwords dont'match"
             if (Platform.OS === 'android') {
                ToastAndroid.show(msg, ToastAndroid.SHORT)
             } else {
                AlertIOS.alert(msg);
             }
            }
          }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  marginTop: 45,
                  borderWidth: 1,
                  borderColor: '#5DA3FA',
                  padding: 11,
                  width: 175,
                  flex: 1,
                  borderRadius: 10,
                  backgroundColor: '#5DA3FA',
                  alignSelf: 'center',
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', paddingTop: 20,color:"white"}}>
                Have an account?{'  '}
              </Text>
              <TouchableOpacity
                onPress={()=>{
                  navigation.navigate("Login");
                }}>
                <Text style={{color: '#96BAFF', paddingTop: 20, fontWeight:"700"}}>Login here </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  brandview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    color: '#fff',
    fontSize: 50,
    fontFamily: 'BlackOpsOne-Regular',
  },
  bottomview: {
    flex: 1.5,
    backgroundColor: '#2C2E32',
    bottom: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
});

