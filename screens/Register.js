import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  ToastAndroid,
  Platform,
  AlertIOS
} from 'react-native';
import {AuthContext} from "../navigation/AuthProvider";
import AddNewUser from "./AddNewUser";

export default function SignUp({navigation}) {
   
   const [email,setEmail] = React.useState();
   const [phone,setPhone] = React.useState();
   const [name,setName] = React.useState();
   const [password,setPassword] = React.useState();
   const [confirmPassword,setConfirmPassword] = React.useState();
   const {register} = React.useContext(AuthContext);
   
   return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder='Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(name)=>setName(name)}
        />
        <TextInput
          style={styles.input}
          value={email}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(email1)=>setEmail(email1)}
        />
        <TextInput
          style={styles.input}
          value={phone}
          placeholder='Phone number'
          keyboardType="numeric"
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(phone)=>setPhone(phone)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(pass)=>setPassword(pass)}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          value={confirmPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(pass)=>setConfirmPassword(pass)}
        />
        <Button
          title='Sign Up'
          onPress={()=>{
            if(password === confirmPassword){
              AddNewUser(name, email, phone);
              register(email,password);
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
        />
        
        <Button
          title='Already registered? Login'
          onPress={()=>{
            navigation.navigate("SignIn");
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
