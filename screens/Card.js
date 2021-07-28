import React from "react";
import {View,StyleSheet} from "react-native";
import { Image, Text, Center, Box, Stack} from "native-base";
import { borderBottom } from "styled-system";

function CardComponent(prop){
  console.log(prop);
  const styles = StyleSheet.create({
    languageDiv:{
      borderRadius:10,
      backgroundColor:'#2C2E32',
      width:60,
      height:37,
      position:"absolute",
      marginLeft:"75%",
      backgroundColor: 'rgba(78,78,78,0.35)',
      justifyContent:'center',
      alignItems:'center',
      marginTop:3
    },
    text:{
      color:prop.items.color,
      opacity:0.89,
      fontSize:16,
      fontWeight:"700"
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
      width="95%"
    >
      <Image source={{uri: prop.items.image}} alt="image base" resizeMode="cover" height={300} roundedTop="xl" roundedBottom="xl"/>
      <Stack space={1}  style={{marginLeft:10,marginTop:15}}>
        <View>
           <Text lineHeight={[6, 4, 7]} style={{fontSize:18,width:200}} color="white">
                 {prop.items.name}
           </Text>
           <View style={styles.languageDiv}>
             <Text style={styles.text}> {prop.items.medium}</Text>
           </View>
        </View>
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
