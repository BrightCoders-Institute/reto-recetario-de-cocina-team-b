import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const ListItem = (props) =>{
  return (
    <TouchableOpacity style={styles(props).container}
      onPress={() => {props.onPress(props.item)}}
    >
        <Image 
          style={styles(props).img}
          source={{
            uri:props.img,
          }}/>
        <Text style={styles(props).text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = (props) => StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop:15,
    flex:1,
  },
  text:{
    fontSize:13,
    color: '#FFFFFF',
    marginBottom:25,
  },
  img:{
    borderRadius:4,
    height:props.height,
    width:props.width,
    marginBottom: 10,
  },
});

export default ListItem;
