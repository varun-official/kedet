import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Topbar from './Topbar';
import Card from './Card';
import {NativeBaseProvider} from 'native-base';

function App({navigation}) {
  const arr = [
    {
      name: 'Government higher primary school',
      place: 'Kapikad, Mangalore - 575004',
      medium: 'Malayalam',
      mediumColor: '#1556FD',
      new: true,
    },
    {
      name: 'Govt. Primary School',
      place: 'Cherkala, Kasargod - 570004',
      medium: 'Kannada',
      mediumColor: 'red',
      new: false,
    },
    {
      name: 'Govt. Primary School',
      place: 'Cherkala, Kasargod - 570004',
      medium: 'Kannada',
      mediumColor: 'red',
      new: false,
    },
  ];
  return (
    <NativeBaseProvider>
      <View style={styles.homecontainer}>
        <Topbar />
        <ScrollView>
          <View style={styles.scrollBar}>
            {arr.map((item, index) => {
              return (
                <View style={styles.card} id={index}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SchoolDesc', {
                        n: item.name,
                      })
                    }>
                    <Card item={item} />
                    <View
                      style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                        marginTop: 30,
                        opacity: 0.7,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: '#2C2E32',
    marginBottom: 50,
  },
  scrollBar: {
    paddingTop: 15,
  },
  card: {
    flex: 1,
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
});
export default App;
