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
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const SchoolDesc = () => {
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);

  const pressLeft = () => {
    setLeft(true);
    setRight(false);
  };
  const pressRight = () => {
    setLeft(false);
    setRight(true);
  };

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
      <>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '900',
            marginBottom: 8,
            marginTop: 35,
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
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: height,
            overflow: 'hidden',
          }}>
          <Animated.View
            style={{
              height,
              width: '100%',
              backgroundColor: 'red',
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
      </>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/gov_school.png')}
        style={styles.image}
      />
      <Text style={styles.hedding_text}>Govt.Higher Primary school</Text>
      <Text style={styles.hedding_text_kan}>ಸರ್ಕಾರಿ ಉನ್ನತ ಪ್ರಾಥಮಿಕ ಶಾಲೆ</Text>
      <View style={styles.tc}>
        <TouchableOpacity>
          <View style={styles.gridContiner}>
            <Icon name="heart" style={styles.icon} />
            <Text style={styles.tt}>Donate</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gridContiner}>
            <Icon name="call" style={styles.icon} />
            <Text style={styles.tt}>Call</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gridContiner}>
            <Icon name="location" style={styles.icon} />
            <Text style={styles.tt}>Location</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
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
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}
      />
      {left ? (
        <View style={styles.container_bottom}>
          <Progress step={5} steps={10} height={7} name="Bench" />
          <Progress step={9} steps={10} height={7} name="Desk" />
          <Progress step={3} steps={10} height={7} name="Table" />
          <Progress step={6} steps={10} height={7} name="Black Board" />
        </View>
      ) : (
        <View style={styles.container_bottom}>
          <Text>
            ################################################################
            #############################################################
            ###############################################3
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
  },
  hedding_text: {
    fontSize: 22,
    marginTop: 20,
    paddingLeft: 15,
  },
  hedding_text_kan: {
    fontSize: 17,
    paddingLeft: 17,
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
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'yellow',
    height: 50,
    width: 120,
    backgroundColor: '#0f4c75',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'red',
    fontSize: 20,
    marginRight: 5,
  },
  tt: {
    fontSize: 17,
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
    color: 'gray',
    paddingBottom: 5,
    borderBottomWidth: 4,
    borderBottomColor: 'red',
    borderRadius: 10,
  },
  container_dec_text_else: {
    fontSize: 17,
    color: 'gray',
    paddingBottom: 5,
  },
  container_bottom: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default SchoolDesc;
