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
} from 'react-native';

import {Input, FormControl} from 'native-base';

import Icon from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const height = Dimensions.get('window').height;

const Profile = () => {
  const sheetRef = React.useRef(null);
  const fall = React.useRef(new Animated.Value(1)).current;
  const [nobench, setNobench] = useState(1);

  const incc = () => {
    setNobench(nobench + 1);
  };
  const decc = () => {
    setNobench(nobench - 1);
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Add Items</Text>
        <Text style={styles.panelSubtitle}>Select the no of item required</Text>
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
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(1)}>
          <Text style={styles.panelInputButtonc}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.panelInputButtonv}>save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#242B2E',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[640, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        callbackNode={fall}
        initialSnap={1}
        enabledGestureInteraction={true}
        enabledContentTapInteraction={false}
      />

      <View style={styles.container_next}>
        <TouchableOpacity>
          <Icon name="users" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inner_container}>
        <View style={styles.inside_main}>
          <Text style={styles.inside_main_text1}>Your Account</Text>
          <Text style={styles.inside_main_text2}>Doner</Text>
        </View>
        <FormControl style={styles.input}>
          <FormControl.Label>Full Name:</FormControl.Label>
          <Input
            variant="outline"
            placeholder="Varun"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </FormControl>
        <FormControl style={styles.input1}>
          <FormControl.Label>Email:</FormControl.Label>
          <Input
            variant="outline"
            placeholder="varunvadda99@gmail.com"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </FormControl>
        <FormControl style={styles.input1}>
          <FormControl.Label>Phone Number:</FormControl.Label>
          <Input
            variant="outline"
            placeholder="8548072149"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </FormControl>
      </View>
      <View style={{top: -130}}>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
          <Text
            style={{
              fontSize: 16,
              borderWidth: 1,
              borderColor: '#0D0D0D',
              padding: 15,
              backgroundColor: '#0D0D0D',
            }}>
            + Add Requirement
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
    backgroundColor: '#0D0D0D',
    width: '95%',
    height: 470,
    top: -180,
    borderRadius: 20,
    alignItems: 'center',
  },
  inside_main: {
    marginTop: 40,
    flexDirection: 'row',
  },
  inside_main_text1: {
    fontSize: 23,
    left: -40,
    top: 15,
  },
  inside_main_text2: {
    fontSize: 20,
    right: -20,
    backgroundColor: '#242B2E',
    padding: 15,
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
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
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
  },
  panelInputInput: {
    width: 80,
    height: 40,
    textAlign: 'center',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
  },
  panelInputButtonc: {
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
