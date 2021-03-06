import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, View, Animated, Image} from 'react-native';

const HomeLoading = () => {
  const logoAnime = useRef(new Animated.Value(0)).current;
  const logoText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
        useNativeDriver: true,
      }).start(),
      Animated.timing(logoText, {
        toValue: 1,
        duration: 12000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [logoAnime]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: logoAnime,
        }}>
        <Image
          source={require('../assets/kedet.gif')}
          style={{
            height: '80%',
          }}></Image>
      </Animated.View>
    </View>
  );
};

export default HomeLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logotext: {
    color: '#fff',
    fontFamily: 'Nunito-Light',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
  },
});
