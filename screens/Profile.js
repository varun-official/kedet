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
import db from "../firestore";
import {AuthContext} from "../navigation/AuthProvider";
import {Input, FormControl, Button} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';
import Loading from './Loading';

const height = Dimensions.get('window').height;

const Profile = ({navigation,route}) => {
  const sheetRef = React.useRef(null);
  const fall = React.useRef(new Animated.Value(1)).current;
  const [nobench, setNobench] = useState(1);
  const [nodesk, setNodesk] = useState(1);
  const [notable, setNotable] = useState(1);
  const [noboard, setNoboard] = useState(1); 
  const [isHead, setIsHead] = useState(true);
  const {user,logout} = React.useContext(AuthContext);
  const [pincode,setPinCode]=React.useState(null);
  const [userName,setUserName] = React.useState(null);
  const [isHeadMaster,setIsHeadMaster] = React.useState(false);
  const [marginTop,setMarginTop] = React.useState(-105);
  const [phoneNumber,setPhoneNumber] = React.useState(null);
  const [refresh,setRefresh] = React.useState(false);
  const [isVisibleReq,setIsVisibleReq] = React.useState(false);
  
  const [gotDesk,setgotDesk] = React.useState(0);
  const [gotBench,setgotBench] = React.useState(0);
  const [gotTable,setgotTable] = React.useState(0);
  const [gotBoard,setgotBoard] = React.useState(0);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  
  React.useEffect(()=>{
    db.collection("users").where('email',"==",user.email).get()
    .then((docs)=>{
        docs.forEach((doc)=>{
           if(doc.data().schoolId !== undefined){
              setPinCode(doc.data().schoolId);
           }
           if(doc.data().role == "1"){
             setIsHeadMaster(true);
             setMarginTop(-55);
           }  
             
           setUserName(doc.data().name); 
           setPhoneNumber(doc.data().phone); 
        })
    }).catch((e)=>{
    });               
  },[]);
  
  React.useEffect(()=>{
  if(pincode)
    db.collection("school").doc(pincode).get()
    .then((doc)=>{
       if(doc.exists){
           setgotDesk(doc.data().desk);
           setgotBench(doc.data().bench);
           setgotTable(doc.data().table);
           setgotBoard(doc.data().board);
       }
    }).catch((e)=>{
       console.log(e);
    });                 
  },[isVisible2]);
    
  const refresher = ()=>{
     setRefresh(true);
  }
   
  if(userName == null) return <Loading/>
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
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>{if(nobench >= 1)setNobench(nobench-1)}}>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              {nobench}
            </TextInput>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>setNobench(nobench+1)}>
              <Text style={styles.panelInputButton2}>+</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Desk</Text>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>{if(nodesk >= 1)setNodesk(nodesk-1)}}>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              {nodesk}
            </TextInput>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>setNodesk(nodesk+1)}>
              <Text style={styles.panelInputButton2}>+</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Table</Text>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>{if(notable >= 1)setNotable(notable-1)}}>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              {notable}
            </TextInput>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>setNotable(notable+1)}>
              <Text style={styles.panelInputButton2}>+</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Board</Text>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>{if(noboard >= 1)setNoboard(noboard-1)}}>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              {noboard}
            </TextInput>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>setNoboard(noboard+1)}>
              <Text style={styles.panelInputButton2}>+</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.panelInputbottom}>
            <TouchableOpacity onPress={() => {
                setIsVisible(false)
             }}>
              <Text style={styles.panelInputButtonc}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                 db.collection("school").doc(pincode).update({
                     bench:nobench,
                     desk:nodesk,
                     table:notable,
                     board:noboard,
                     date: Date.now()   
                 }).then(() => {
                   console.log("Successfully added requirement");
                 })
                 .catch((error) => {
                   console.error("Error writing document: ", error);
                });
               setIsVisible(false)
             }}>
              <Text style={styles.panelInputButtonv}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType={'slide'} transparent={true} visible={isVisible2}>
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Update Items</Text>
            <Text style={styles.panelSubtitle}>
              Select the no of item required
            </Text>
          </View>
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Bench</Text>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>{if(gotBench >= 1)setgotBench(gotBench-1)}}>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              {gotBench}
            </TextInput>
          </View>
          
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Desk</Text>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>{if(gotDesk >= 1)setgotDesk(gotDesk-1)}}>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              {gotDesk}
            </TextInput>
          </View>
          
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Table</Text>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>{if(gotTable >= 1)setgotTable(gotTable-1)}}>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              {gotTable}
            </TextInput>
          </View>
          
          <View style={styles.panelInput}>
            <Text style={styles.panelInputText}>Board</Text>
            <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={()=>{if(gotBoard >= 1)setgotBoard(gotBoard-1)}}>
              <Text style={styles.panelInputButton1}>-</Text>
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              caretHidden={true}
              style={styles.panelInputInput}>
              {gotBoard}
            </TextInput>
          </View>
          
          <View style={styles.panelInputbottom}>
            <TouchableOpacity onPress={() => {
                setIsVisible2(false)
             }}>
              <Text style={styles.panelInputButtonc}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                 db.collection("school").doc(pincode).update({
                     gotBench:gotBench,
                     gotDesk:gotDesk,
                     gotTable:gotTable,
                     gotBoard:gotBoard  
                 }).then(() => {
                   console.log("Successfully added requirement");
                 })
                 .catch((error) => {
                   console.error("Error writing document: ", error);
                });
               setIsVisible2(false)
             }}>
              <Text style={styles.panelInputButtonv}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <TouchableOpacity style={{marginTop:marginTop,marginLeft: '75%', }} onPress={()=>{
        logout();
      }}>
        <Icon name="power" style={styles.topIcon}/>
      </TouchableOpacity>
      <View style={styles.inner_container}>
        {isHeadMaster ? (
          <View style={styles.inside_main}>
            <TouchableOpacity onPress={() => navigation.navigate('EditSchool',{pinCode:pincode,phone:phoneNumber})}>
              <Text style={styles.inside_main_text2}>{"Your School" }</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.inside_main}>
            <Text style={styles.inside_main_text1}>Your Account</Text>
            <Text style={styles.inside_main_text2}>Doner</Text>
          </View>
        )}
        <FormControl style={styles.input}>
          <FormControl.Label><Text style={{color:"#D2D1D1"}}>Name:</Text></FormControl.Label>
          <Input
            editable={false}
            variant="outline"
            placeholder="Enter name"
            value={userName}
            color="white"
          />
        </FormControl>
        <FormControl style={styles.input1}>
          <FormControl.Label><Text style={{color:"#D2D1D1"}}>Email:</Text></FormControl.Label>
          <Input
            variant="outline"
            editable={false}
            placeholder={user.email}
            _light={{
              placeholderTextColor: 'white',
            }}
            _dark={{
              placeholderTextColor: 'white',
            }}
          />
        </FormControl>
        <FormControl style={styles.input1}>
          <FormControl.Label><Text style={{color:"white"}}>Phone Number:</Text></FormControl.Label>
          <Input
            editable={false}
            variant="outline"
            placeholder={phoneNumber}
            _light={{
              placeholderTextColor: 'white',
            }}
            _dark={{
              placeholderTextColor: 'white',
            }}
          />
        </FormControl>
      </View>
      <TouchableOpacity onPress={() => setIsVisibleReq(true)} style={{marginTop:30,marginLeft:-25}}>
            <Text style={styles.inside_main_text100}>{"Update requirements" }</Text>
      </TouchableOpacity>
      <Modal animationType={'slide'} transparent={true} visible={isVisibleReq}>
        <View style={styles.panel2}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.panelTitle}>Update requirements</Text>
            </View>
            
           {isHead && pincode !== null && (
             <View style={{marginTop: 30}}>
               <TouchableOpacity onPress={() => setIsVisible(true)}>
                <Text
                  style={{
                    fontSize: 16,
                    borderWidth: 1,
                    borderColor: '#0D0D0D',
                    padding: 10,
                    backgroundColor: '#111515',
                    color: 'white',
                    borderRadius: 5,
                 }}>
                  + Add Requirement
                 </Text>
               </TouchableOpacity>
             </View>
            )}
                 
      {isHead && pincode !== null && (
        <View style={{marginTop: 30}}>
          <TouchableOpacity onPress={() => setIsVisible2(true)}>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderColor: '#0D0D0D',
                padding: 10,
                backgroundColor: '#111515',
                color: 'white',
                borderRadius: 5,
              }}>
              Update Requirement
            </Text>
          </TouchableOpacity>
        </View>
      )} 
        <View style={styles.panelInputbottom1}>
            <TouchableOpacity onPress={() => {
                setIsVisibleReq(false)
             }}>
              <Text style={styles.panelInputButtonc}>Cancel</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Modal>
      
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scroll_container: {
    flex: 1,
    backgroundColor: '#2C2E32',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  icon: {
    fontSize: 24,
    paddingLeft: 40,
    color: 'red',
  },
  inner_container: {
    backgroundColor: '#121418',
    width: '95%',
    height: 450,
    borderRadius: 20,
    alignItems: 'center',
    zIndex:-1,
    marginTop:30,
    borderColor:'grey',
    borderWidth:1,
    zIndex: -1,
    marginTop: 30,
    zIndex: -1,
    marginTop: 30,
  },
  inside_main: {
    marginTop: 20,
    flexDirection: 'row',
  },
  inside_main_text1: {
    fontSize: 23,
    color: 'white',
    top:10
  },
  inside_main_text2: {
    fontSize: 20,
    backgroundColor: '#242932',
    padding: 12,
    borderRadius: 10,
    color: 'white',
    marginLeft:20
  },
  inside_main_text100: {
    fontSize: 20,
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 10,
    color: 'white',
    marginLeft:20
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
    width: '90%',
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
    color: 'white',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panel2: {
    padding: 20,
    backgroundColor: '#111515',
    paddingTop: 20,
    height: '45%',
    marginTop: 'auto',
    color: 'white',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  panel: {
    padding: 20,
    backgroundColor: '#111515',
    paddingTop: 20,
    height: '65%',
    marginTop: 'auto',
    color: 'white',
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
    color: '#D9D2D2',
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
    zIndex:3
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
  panelInputbottom1: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    marginTop:50
  },
  panelInputText: {
    fontSize: 20,
    color: '#D9D2D2',
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
    color: '#D3CFCF',
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
    color: '#D3CFCF',
  },
  panelInputInput: {
    width: 80,
    height: 40,
    textAlign: 'center',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    color: '#D3CFCF',
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
  },
  topIcon: {
    color: '#90B8F8',
    zIndex: 3,
    fontSize: 24,
  },
});
