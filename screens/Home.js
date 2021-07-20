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
  Keyboard
} from 'react-native';
import Card from './Card';
import {NativeBaseProvider} from 'native-base';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

const topbarHeight = 92 - StatusBar.currentHeight;

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
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  
const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: '#2C2E32',
    marginBottom:isKeyboardVisible ? 0 : 50
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
    flexWrap: 'wrap'
  },
  arrowBack: {
    color: '#DCDCDC',
    fontSize: 27,
    marginLeft: 12,
    marginTop: 19,
  },
  searchBar: {
    borderRadius: 6,
    backgroundColor: 'rgba(78,78,78,0.5)',
    marginLeft: 5,
    width: '75%',
    height: 41,
    marginTop: 14,
    borderWidth: 1,
    color:"white",
    paddingLeft:12
  },
  micBackground: {
    backgroundColor: 'rgba(78,78,78,0.5)',
    width: 35,
    height: 35,
    marginTop: 16,
    marginLeft: 8,
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  micIcon: {
    color: '#DCDCDC',
    fontSize: 22,
    zIndex: 5,
    opacity: 1,
  },
 });
  
  
  const [searchedSchool, setSearchedSchool] = useState(school);

  const contains = ({place, pincode}, query) => {
    if (place.toLowerCase().includes(query) || pincode.includes(query))
      return true;
    return false;
  };

  const searchFilter = text => {
    const formattedQuery = text;
    setSearch(formattedQuery);
    const data = _.filter(school, sch => {
      return contains(sch, formattedQuery.toLowerCase());
    });
    console.log(formattedQuery);
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
              style={{fontSize: 18, color: 'white',top:2}}
              placeholder="Search zipcode or Place"
              placeholderTextColor = "#DCDCDC"      
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
          style={{marginTop:5}}
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
                    marginTop: 20,
                    opacity: 0.7,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </NativeBaseProvider>
  );
}


export default App;
