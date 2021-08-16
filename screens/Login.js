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
            height: Dimensions.get('window').height / 2.4,
          }}>
          <View style={styles.brandview}>
            <Text style={styles.brandText}>Kedet</Text>
          </View>
        </ImageBackground>
        <View style={styles.bottomview}>
          <View style={{padding: 10}}>
            <Text style={{color: '#fff', fontSize: 30, textAlign: 'center', marginTop:30,fontWeight:"700"}}>
              Welcome back
            </Text>
            <View style={{marginTop: 30}}>
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
                    color:"white"
                  }}
                  _light={{
                      color: "#AAAAAA",
                  }}               
                  value={email}
                  onChangeText={(e)=>setEmail(e)}
                  placeholderTextColor="#CAD5E2"
                  variant="outline"
                  placeholder="Enter the email"
                  keyboardType="email-address"
                />
              </FormControl>
              <FormControl style={{marginTop: 20}}>
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
                SignIn
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center'
              }}>
              <Text style={{textAlign: 'center', paddingTop: 20,color:"white"}}>
                Don't have an account?{'  '}
              </Text>
              <TouchableOpacity   onPress={()=>{
                   navigation.navigate("Register");
              }}>
                <Text style={{color: '#96BAFF', paddingTop: 20, fontWeight:"700"}}>
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

