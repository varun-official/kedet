import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';

const Donate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nobench, setNobench] = useState(1);

  return (
    <View style={styles.container}>
      <Modal animationType={'slide'} transparent={true} visible={isVisible}>
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Donate Items</Text>
            <Text style={styles.panelSubtitle}>
              Select the no of item you Donate
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

      <View style={styles.inside}>
        <TouchableOpacity>
          <Text style={styles.donateText}>Donate Money</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Text style={styles.donateText1}>Donate Items</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Donate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2E32',
  },
  inside: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: -250,
    alignItems: 'center',
    flexDirection: 'row',
  },
  quote: {
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  donateText: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 15,
    fontSize: 20,
    fontFamily: 'Nunito-Light',
    backgroundColor: '#1FAA59',
  },
  donateText1: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 15,
    fontSize: 20,
    fontFamily: 'Nunito-Light',
    backgroundColor: 'red',
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
  panel: {
    padding: 20,
    backgroundColor: '#111515',
    paddingTop: 20,
    height: '60%',
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
});

