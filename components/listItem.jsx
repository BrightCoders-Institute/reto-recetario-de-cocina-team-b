import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

const ListItem = (props) =>{
  return (
    <View style={styles(props).container}>
      <Image 
        style={styles(props).img}
        source={{
          uri:props.img,
        }}/>
      <Text style={styles(props).text}>{props.text}</Text>
    </View>
  );
}

const styles = (props) => StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop:15,
    height:props.height,
    width:props.width,
    flexDirection:'column',
  },
  text:{
    fontSize:13,
    color: '#FFFFFF',
  },
  img:{
    borderRadius:4,
    width: '90%',
    height: '90%',
    marginBottom: 10,
  },
});

export default ListItem;
