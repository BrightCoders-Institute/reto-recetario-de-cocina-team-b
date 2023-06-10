import React from 'react';
import {ImageBackground, TouchableOpacity, NativeModules, StyleSheet, Text, View} from 'react-native';
const { StatusBarManager } = NativeModules;
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const RecipeImage = props => {
  return (
    <ImageBackground source={{uri:props.img}} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.rowSpace}>
          <TouchableOpacity onPress={props.onPress}>
            <EvilIcons name="close" size={40} color="#FFFFFF"/>
          </TouchableOpacity>
          <View style={styles.row}>
            <EvilIcons style={styles.icon} name="share-apple" size={40} color="#FFFFFF"/>
            <EvilIcons style={styles.icon} name="heart" size={40} color="#FFFFFF"/>
          </View>
        </View>
        <View>
          <Text style={styles.textSection}>{props.section}</Text>
          <Text style={styles.textTitle}>{props.title}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  content:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
    paddingHorizontal: 20,
    paddingBottom:40,
    backgroundColor:'rgba(40, 40, 40,0.75)',
    justifyContent:'space-between',
  },
  row:{
    flexDirection:'row',
  },
  rowSpace:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  icon:{
    marginHorizontal:5,
  },
  textSection:{
    color:'#FFFFFF',
    fontSize:20,
    textTransform: 'uppercase',
  },
  textTitle:{
    color:'#FFFFFF',
    fontSize:25,
  }
});

export default RecipeImage;