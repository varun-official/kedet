import React from 'react';
import {AuthContext} from "../navigation/AuthProvider";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {Input, FormControl} from 'native-base';

const SignIn = ({navigation}) => {
  const [email,setEmail] = React.useState();
  const [password,setPassword] = React.useState();
  const {login} = React.useContext(AuthContext);
  return (
    <NativeBaseProvider>
      <ScrollView
        style={{flex: 1, backgroundColor: '#2C2E32'}}
        showsHorizontalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/back.jpg')}
          style={{
            height: Dimensions.get('window').height / 2.2,
          }}>
          <View style={styles.brandview}>
            <Text style={styles.brandText}>Kedet</Text>
          </View>
        </ImageBackground>
        <View style={styles.bottomview}>
          <View style={{padding: 10}}>
            <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>
              Welcome,back
            </Text>
            <View style={{marginTop: 50}}>
              <FormControl style={{borderColor: '#2C2E32'}}>
                <FormControl.Label style={{paddingLeft: 10}}>
                  Email:
                </FormControl.Label>
                <Input
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#5DA3FA',
                    padding: 10
                  }}
                  value={email}
                  onChangeText={(e)=>setEmail(e)}
                  inputStyle={{color:"white"}}
                  placeholderTextColor="#CAD5E2"
                  variant="outline"
                  placeholder="Enter the email"
                  keyboardType="email-address"
                />
              </FormControl>
              <FormControl style={{marginTop: 20}}>
                <FormControl.Label style={{paddingLeft: 10}}>
                  Password:
                </FormControl.Label>
                <Input
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#5DA3FA',
                    padding: 10,
                  }}
                  value={password}
                  onChangeText={(e)=>setPassword(e)}
                  placeholderTextColor="#CAD5E2"
                  variant="outline"
                  placeholder="Enter the password"
                  type="password"
                />
              </FormControl>
            </View>
            <TouchableOpacity  onPress={()=>{
              login(email,password);
            }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  marginTop: 50,
                  borderWidth: 1,
                  borderColor: '#5DA3FA',
                  padding: 11,
                  width: 175,
                  flex: 1,
                  borderRadius: 10,
                  backgroundColor: '#5DA3FA',
                  alignSelf: 'center',
                }}>
                SignIn
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', paddingTop: 20}}>
                Don't have an account?{'  '}
              </Text>
              <TouchableOpacity   onPress={()=>{
                   navigation.navigate("Register");
              }}>
                <Text style={{color: 'red', paddingTop: 20}}>
                  Register now{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default SignIn;

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
console.log();

