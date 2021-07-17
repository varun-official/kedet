import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const topbarHeight = 95-StatusBar.currentHeight;

function App() {
  StatusBar.setBackgroundColor("#00000f");
  return (
    <View style={styles.homecontainer}>
      <Icon name="arrow-back" style={styles.arrowBack} />
      <View style={styles.searchBar}>
        <Text style={{fontSize:18,color:'#DFDFDF'}}>Type zipcode, school name</Text>
      </View>
      <View style={styles.micBackground}>
        <Icon name="mic" style={styles.micIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homecontainer:{
    height:topbarHeight,
    backgroundColor:'black',
    zIndex:2,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  arrowBack:{
    color:'white',
    fontSize:24,
    marginLeft:12,
    marginTop:22
  },
  searchBar:{
    borderRadius:6,
    backgroundColor:'rgba(78,78,78,0.5)',
    marginLeft:5,
    width:'75%',
    justifyContent:"center",
    height:38,
    marginTop:15,
    borderWidth:1,
    paddingLeft:12
  },
  micBackground:{
    backgroundColor:'rgba(78,78,78,0.5)',
    width: 35,
    height: 35,
    marginTop:15,
    marginLeft:8,
    borderRadius:35/2,
    justifyContent:'center',
    alignItems:'center'
  },
  micIcon:{
    color:'white',
    fontSize:22,
    zIndex:5,
    opacity:1
  }
});
export default App;