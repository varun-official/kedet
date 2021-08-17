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
  Animated,
  Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const SchoolDesc = ({navigation, route}) => {
  const {n} = route.params;
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);
  const [name1, setName1] = useState('');
  const openloc = () => {
      const lat = 12.9579542;
      const lng = 75.2145407;
      var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
      var url = scheme + `${lat},${lng}`;
      Linking.openURL(url);
    };
  const pressLeft = () => {
    setLeft(true);
    setRight(false);
  };
  const pressRight = () => {
    setLeft(false);
    setRight(true);
  };

  console.log(n);

  const Progress = ({step, steps, height, name}) => {
    const [width, setWidth] = useState(0);
    const animatedvalue = React.useRef(new Animated.Value(-1000)).current;
    const reactive = React.useRef(new Animated.Value(-1000)).current;
    
    useEffect(() => {
      Animated.timing(animatedvalue, {
        toValue: reactive,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, []);

    useEffect(() => {
      reactive.setValue(-width + (width * step) / steps);
    }, [width, step]);

    return (
      <View style={{marginLeft:5,marginRight:5}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '900',
            marginTop: 20,
          }}>
          {name}
        </Text>
        <View
          onLayout={e => {
            const newwidth = e.nativeEvent.layout.width;
            setWidth(newwidth);
          }}
          style={{
            height,
            backgroundColor: '#BFBFBF',
            borderRadius: height,
            overflow: 'hidden',
            marginTop:2
          }}>
          <Animated.View
            style={{
              height,
              width: '100%',
              backgroundColor: '#FF5757',
              borderRadius: height,
              left: 0,
              top: 0,
              transform: [
                {
                  translateX: animatedvalue,
                },
              ],
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style={styles.container}>
        <Image
          source={{uri: n.image}} 
          style={styles.image}
        />
        <Text style={styles.hedding_text}>{n.name}</Text>
        <Text style={styles.hedding_text_kan}>ಸರ್ಕಾರಿ ಉನ್ನತ ಪ್ರಾಥಮಿಕ ಶಾಲೆ</Text>
        <View style={styles.tc}>
           <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
            <View style={styles.gridContiner}>
              <Icon name="heart" style={styles.icon} />
              <Text style={styles.tt}>Donate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${n.phone}`)}>
            <View style={styles.gridContiner}>
              <Icon name="call" style={styles.icon} />
              <Text style={styles.tt}>Call</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={openloc}>
            <View style={styles.gridContiner}>
              <Icon name="location" style={styles.icon} />
              <Text style={styles.tt}>Location</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: '#5B6472',
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.container_dec}>
          <TouchableOpacity onPress={pressLeft}>
            <Text
              style={
                left == true
                  ? styles.container_dec_text
                  : styles.container_dec_text_else
              }>
              REQUIREMENTS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pressRight}>
            <Text
              style={
                right == true
                  ? styles.container_dec_text
                  : styles.container_dec_text_else
              }>
              DESCRIPTION
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: '#5B6472',
            borderBottomWidth: 1
          }}
        />
        {left ? (
          <View  style={styles.container_bottom}>
            <Progress step={n.gotBench == undefined ? 1 : n.gotBench} steps={n.bench !== undefined ? n.bench : 10} height={7} name={<Text style={styles.progressBarStyle}>Bench</Text>} />
            <Progress step={n.gotDesk == undefined ? 1 : n.gotDesk} steps={n.desk !== undefined ? n.desk : 10} height={7} name={<Text style={styles.progressBarStyle}>Desk</Text>} />
            <Progress step={n.gotTable == undefined ? 1 : n.gotTable} steps={n.table !== undefined ? n.table : 10} height={7} name={<Text style={styles.progressBarStyle}>Table</Text>} />
            <Progress step={n.gotBoard == undefined ? 1 : n.gotBoard} steps={n.board !== undefined ? n.board : 10} height={7} name={<Text style={styles.progressBarStyle}>Black Board</Text>} />
          </View>
        ) : (
          <View style={styles.container_bottom1}>
            <Text style={{color:'white'}}>
             {n.desc == undefined ? " " : n.desc}
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2C2E32'
  },
  image: {
    height: 220,
  },
  hedding_text: {
    fontSize: 22,
    marginTop: 20,
    paddingLeft: 15,
    color:'white'
  },
  hedding_text_kan: {
    fontSize: 17,
    paddingLeft: 17,
    color:'#bebebe'
  },
  tc: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
  },

  gridContiner: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#303132',
    height: 50,
    width: 105,
    backgroundColor: '#40454D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#90B8F8',
    fontSize: 20,
    marginRight: 5,
  },
  tt: {
    fontSize: 16,
    color:"#DEDEDE"
  },
  container_dec: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 15,
  },
  container_dec_text: {
    fontSize: 17,
    fontWeight:'bold',
    color: '#5F85DB',
  },
  container_dec_text_else: {
    fontSize: 17,
    color: '#BEBEBE',

  },
  container_bottom1: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    flex:1,
    paddingTop:10,
    alignItems:"center"    
  },
  container_bottom: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex:1,
    paddingTop:10    
  },
  progressBarStyle:{
     color:'white'
  }
});

export default SchoolDesc;

