import React from "react";
import {View,StyleSheet} from "react-native";
import { Image, Text, Center, Box, Stack} from "native-base";
import { borderBottom } from "styled-system";

function CardComponent(prop){
  const styles = StyleSheet.create({
    languageDiv:{
      borderRadius:10,
      backgroundColor:'#2C2E32',
      borderColor:prop.items.mediumColor,
      width:60,
      height:37,
      position:"absolute",
      marginLeft:'70%',
      borderWidth:2,
      justifyContent:'center',
      alignItems:'center',
      marginTop:3
    },
    text:{
      color:'white',
      fontSize:12
    },
    floatingDiv:{
      width:50,
      height:20,
      marginLeft:15,
      marginTop:15,
      backgroundColor:'#FF5757',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:30,
      flexDirection:'row',
      flexWrap:'wrap'
    }
  });
 return(
    <Box
      bg="#2C2E32"
      rounded="lg"
      width="100%"
    >
      <Image source={{uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"}} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
      {prop.items.new && <View position="absolute" top={0} style={styles.floatingDiv}>
         <View style={{width:5,height:5,backgroundColor:"white",marginTop:13,borderRadius:3}}>
         </View>
         <Text bold color="white" style={{fontSize:12,marginLeft:5}}>
           New
         </Text>
      </View>}
      <Stack space={1}  style={{marginLeft:10,marginTop:15}}>
        <View>
           <Text lineHeight={[5, 5, 7]} style={{fontSize:15}} color="white">
                 {prop.items.name}
           </Text>
           <View style={styles.languageDiv}>
             <Text style={styles.text}> {prop.items.medium}</Text>
           </View>
        </View>
        <Text lineHeight={[5, 5, 7]} style={{fontSize:12}} color="#C4C4C4">
        {prop.items.place}
        </Text>
      </Stack>
      </Box>
    );
    
}

export default function (props) {
  return (
    <Center flex={1}>
      <CardComponent items={props.item}/>
    </Center>
  );
}
