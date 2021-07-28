import React from 'react';
import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import {Avatar} from 'native-base';

const Notice_card = ({name, pincode, lat, lng,image}) => {
  const openloc = () => {
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    var url = scheme + `${lat},${lng}`;
    Linking.openURL(url);
  };
  return (
    <>
      <TouchableOpacity onPress={openloc}>
        <View style={styles.container}>
          <Avatar
            source={{
              uri: image,
            }}
            size="xl"
            style={{
              marginLeft: 10,
            }}
          />
          <View style={styles.right_container}>
            <Text style={{fontSize: 20, top: -15, color:"white",marginLeft:12}}>Name: {name}</Text>
            <Text style={{fontSize: 16, top: -5, color:"white",marginLeft:12 }}>Pincode: {pincode}</Text>
            <View style={{bottom: -15, backgroundColor:'#2C2E32',borderRadius:5,padding:5,opacity:0.7}}>
               <Text style={{color:"white"}}>Tap to view location</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Notice_card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 150,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    marginTop: 20,
    backgroundColor:"black"
  },
  right_container: {
    marginLeft: 50,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width:150
  },
});
