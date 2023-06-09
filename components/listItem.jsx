import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

const ListItem = (props) =>{
  return (
    <View style={styles.container}>
      <Image 
        style={styles.img}
        source={{
          uri:props.img,
        }}/>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop:15,
    height:115,
    width:115,
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
