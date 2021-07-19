import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Card from './Card';
import {NativeBaseProvider} from 'native-base';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

const topbarHeight = 95 - StatusBar.currentHeight;

function App({navigation}) {
  const [search, setSearch] = useState('');
  const [school, setSchool] = useState([
    {
      name: 'Government higher primary school',
      place: 'Kapikad, Mangalore ',
      medium: 'Malayalam',
      mediumColor: '#1556FD',
      new: true,
      id: 1,
      pincode: '575007',
    },
    {
      name: 'Govt. Primary School',
      place: 'Cherkala, Kasargod',
      medium: 'Kannada',
      mediumColor: 'red',
      new: false,
      id: 2,
      pincode: '570004',
    },
    {
      name: 'Govt. Primary School',
      place: 'Cherkala, Kasargod',
      medium: 'Kannada',
      mediumColor: 'red',
      new: false,
      id: 3,
      pincode: '570005',
    },
  ]);

  const [searchedSchool, setSearchedSchool] = useState(school);

  const contains = ({place, pincode}, query) => {
    if (place.toLowerCase().includes(query) || pincode.includes(query))
      return true;
    return false;
  };

  const searchFilter = text => {
    const formattedQuery = text.toLowerCase();
    const data = _.filter(school, sch => {
      return contains(sch, formattedQuery);
    });
    console.log(formattedQuery);
    setSearch(formattedQuery);
    setSearchedSchool(data);
  };

  StatusBar.setBackgroundColor('#00000f');

  return (
    <NativeBaseProvider>
      <View style={styles.homecontainer}>
        <View style={styles.homecontainer1}>
          <Icon name="arrow-back" style={styles.arrowBack} />
          <View style={styles.searchBar}>
            <TextInput
              style={{fontSize: 16, color: '#DFDFDF'}}
              placeholder="Search zipcode or Place"
              value={search}
              onChangeText={text => searchFilter(text)}
            />
          </View>
          <View style={styles.micBackground}>
            <Icon name="mic" style={styles.micIcon} />
          </View>
        </View>
        <FlatList
          data={searchedSchool}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.card}>
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
          )}
        />
        {/* <ScrollView>
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
          </ScrollView> */}
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
  homecontainer1: {
    height: topbarHeight,
    backgroundColor: 'black',
    zIndex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  arrowBack: {
    color: 'white',
    fontSize: 27,
    marginLeft: 12,
    marginTop: 22,
  },
  searchBar: {
    borderRadius: 6,
    backgroundColor: 'rgba(78,78,78,0.5)',
    marginLeft: 5,
    width: '75%',
    justifyContent: 'center',
    height: 38,
    marginTop: 15,
    borderWidth: 1,
    paddingLeft: 12,
    height: 45,
  },
  micBackground: {
    backgroundColor: 'rgba(78,78,78,0.5)',
    width: 40,
    height: 40,
    marginTop: 15,
    marginLeft: 8,
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  micIcon: {
    color: 'white',
    fontSize: 22,
    zIndex: 5,
    opacity: 1,
  },
});
export default App;
