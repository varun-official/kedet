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
  Keyboard,
  RefreshControl
} from 'react-native';
import Card from './Card';
import {NativeBaseProvider} from 'native-base';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import db from "../firestore";
import Loading from './Loading';


function App({navigation}) {
  const topbarHeight = 92 - StatusBar.currentHeight;   
  const [search, setSearch] = useState('');
  const [school, setSchool] = useState([]);    
  const [searchedSchool, setSearchedSchool] = useState(school);
  const [refresh,setRefresh] = React.useState(false);
  const [load,setLoading] = React.useState(false);
  
  React.useEffect(()=>{
    db.collection('school')
    .get()
    .then(querySnapshot => {
      setLoading(true);
      const documents = querySnapshot.docs.map(doc => doc.data())
      documents.map((item,index)=>{
         item['id'] = index;
         item['color'] = "white";
      });
      documents.sort((a,b)=>{
         return b.date - a.date
      });
      console.log(documents);
      setSchool(documents);
      setSearchedSchool(documents);
      setLoading(false);
    })
  },[refresh]);
 
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
  
  
  const [refreshing, setRefreshing] = React.useState(false);
  const wait = (timeout) => {
     return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {  
    setRefreshing(true);
    setRefresh(!refresh);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  if(searchedSchool == undefined || searchedSchool == null) return <Loading/>
  
  const contains = ({address, pincode}, query) => {
    if (address.toLowerCase().includes(query) || pincode.includes(query))
      return true;
    return false;
  };

  const searchFilter = text => {
    const formattedQuery = text;
    setSearch(formattedQuery);
    const data = _.filter(school, sch => {
      return contains(sch, formattedQuery.toLowerCase());
    });
    setSearchedSchool(data);
  };

  StatusBar.setBackgroundColor('#00000f');
  if(load)return <Loading/>
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
          style={{marginTop:15}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
          />}
          renderItem={({item}) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SchoolDesc', {
                    n: item,
                  })
                }>
                <Card item={item} />
                <View
                  style={{
                    borderBottomColor: '#2C2E32',
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
