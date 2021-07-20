import {React,useState} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';
import {AuthContext} from "../navigation/AuthProvider";

export default function SignIn({navigation}) {
   
   const [password,setPassword] = useState();
   const {login} = React.useContext(AuthContext);
   
   return (
      <View style={styles.container}>
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
          placeholder='Password'
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(pass)=>setPassword(pass)}
        />
        <Button
          title='Sign In'
          onPress={()=>{
            login(email,password);
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
