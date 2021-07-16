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
  Pressable,
  Dimensions,
  Modal,
} from 'react-native';

import {Input, FormControl} from 'native-base';

import Icon from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';

const height = Dimensions.get('window').height;

const Profile = ({navigation}) => {
  const sheetRef = React.useRef(null);
  const fall = React.useRef(new Animated.Value(1)).current;
  const [nobench, setNobench] = useState(1);
  const [isHead, setIsHead] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const incc = () => {
    setNobench(nobench + 1);
  };
  const decc = () => {
    setNobench(nobench - 1);
  };

  return (
    
    <ScrollView
      contentContainerStyle={
        isVisible ? styles.scroll_container1 : styles.scroll_container
      }>
      <Modal animationType={'slide'} transparent={true} visible={isVisible}>
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Add Items</Text>
            <Text style={styles.panelSubtitle}>
              Select the no of item required
            </Text>
          </View>
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Bench</Text>
            <TouchableOpacity>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              {nobench}
            </TextInput>
            <TouchableOpacity>
              <Text style={styles.panelInputButton2}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Desk</Text>
            <Pressable>
              <Text style={styles.panelInputButton1}>-</Text>
            </Pressable>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              0
            </TextInput>
            <Pressable>
              <Text style={styles.panelInputButton2}>+</Text>
            </Pressable>
          </View>
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Table</Text>
            <TouchableOpacity>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              0
            </TextInput>
            <TouchableOpacity>
              <Text style={styles.panelInputButton2}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Board</Text>
            <TouchableOpacity>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              0
            </TextInput>
            <TouchableOpacity>
              <Text style={styles.panelInputButton2}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.panelInputbottom}>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Text style={styles.panelInputButtonc}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Text style={styles.panelInputButtonv}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity  style={{marginLeft:"50%",marginTop:-55}}>
       <Icon name="bell" style={styles.topIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:"80%",marginTop:-25}}>
       <Icon name="users" style={styles.topIcon} />
      </TouchableOpacity>
      <View style={styles.inner_container}>
        {isHead ? (
          <View style={styles.inside_main}>
            <TouchableOpacity onPress={() => navigation.navigate('EditSchool')}>
              <Text style={styles.inside_main_text2}>Your School</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.inside_main}>
            <Text style={styles.inside_main_text1}>Your Account</Text>
            <Text style={styles.inside_main_text2}>Doner</Text>
          </View>
        )}
        <FormControl style={styles.input}>
          <FormControl.Label style={{color:"#D2D1D1"}} >Full Name:</FormControl.Label>
          <Input
            variant="outline"
            placeholder="Varun"
            _light={{
              placeholderTextColor: 'white',
            }}
            _dark={{
              placeholderTextColor: 'white',
            }}
          />
        </FormControl>
        <FormControl style={styles.input1}>
          <FormControl.Label style={{color:"#D2D1D1"}}>Email:</FormControl.Label>
          <Input
            variant="outline"
            placeholder="varunvadda99@gmail.com"
            _light={{
              placeholderTextColor: 'white',
            }}
            _dark={{
              placeholderTextColor: 'white',
            }}
          />
        </FormControl>
        <FormControl style={styles.input1}>
          <FormControl.Label style={{color:"#D2D1D1"}}>Phone Number:</FormControl.Label>
          <Input
            variant="outline"
            placeholder="8548072149"
            _light={{
              placeholderTextColor: 'white',
            }}
            _dark={{
              placeholderTextColor: 'white',
            }}
          />
        </FormControl>
      </View>
      {isHead && (
        <View style={{marginTop:30}}>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderColor: '#0D0D0D',
                padding: 15,
                backgroundColor: '#111515',
                color:'white',
                borderRadius:5
              }}>
              + Add Requirement
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scroll_container: {
    flex: 1,
    backgroundColor: '#2C2E32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll_container1: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.06,
    
  },

  container_next: {
    flex: 1,
    backgroundColor: '#242B2E',
    margin: 30,
    flexDirection: 'row-reverse',
    left: 100,
    zIndex:-1
  },
  icon: {
    fontSize: 24,
    paddingLeft: 40,
    color: 'red',
  },
  inner_container: {
    backgroundColor: '#121418',
    width: '95%',
    height: 470,
    borderRadius: 20,
    alignItems: 'center',
    zIndex:-1,
    marginTop:30
  },
  inside_main: {
    marginTop: 40,
    flexDirection: 'row',
    
  },
  inside_main_text1: {
    fontSize: 23,
    left: -40,
    top: 15,
    color:"white"
  },
  inside_main_text2: {
    fontSize: 20,
    backgroundColor: '#242932',
    padding: 12,
    borderRadius: 10,
    color:"white"
  },
  inside_main_text3: {
    fontSize: 20,
    backgroundColor: '#242B2E',
    padding: 12,
    left: '-30%',
    borderRadius: 10,
  },
  input: {
    marginTop: 20,
    width: '90%'
  },
  input1: {
    marginTop: 30,
    width: '90%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
    color:"white"
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10
  },
  panel: {
    padding: 20,
    backgroundColor: '#111515',
    paddingTop: 20,
    height: '60%',
    marginTop: 'auto',
    color:"white"
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    color:"#D9D2D2"
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelInput: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  panelInputlast: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  panelInputbottom: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  panelInputText: {
    fontSize: 20,
    color:"#D9D2D2"
  },
  panelInputButton1: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 5,
    paddingLeft: 13,
    fontSize: 22,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -50,
    color:"#D3CFCF"
  },

  panelInputButton2: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 5,
    paddingLeft: 13,
    fontSize: 24,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -40,
    color:"#D3CFCF"
  },
  panelInputInput: {
    width: 80,
    height: 40,
    textAlign: 'center',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    color:"#D3CFCF"
  },
  panelInputButtonc: {
    borderWidth: 2,
    borderColor: '#FF5757',
    backgroundColor: '#FF5757',

    borderRadius: 10,
    padding: 20,
    width: 130,
    height: 60,
    textAlign: 'center',
  },
  panelInputButtonv: {
    borderWidth: 2,
    borderColor: '#00D355',
    backgroundColor: '#00D355',
    borderRadius: 10,
    padding: 20,
    width: 130,
    height: 60,
    textAlign: 'center',
  },
  topIcon:{
    color:"#90B8F8",
    zIndex:3,
    fontSize:24
  }
});