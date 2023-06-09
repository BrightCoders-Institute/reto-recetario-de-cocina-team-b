import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Platform, NativeModules} from 'react-native';
const { StatusBarManager } = NativeModules;
import { StatusBar } from 'expo-status-bar';
import { SearchBar } from '@rneui/themed';
import ListItem from '../components/listItem';
import HorizontalList from '../components/horizontalList';
const data = require('../Recetas.json')

export default function HomeScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <SearchBar
        placeholder="What do you want to eat?"
      />
      <HorizontalList data={data.recetas} titulo={"TRENDING"} imgHeight={115} imgWidth={115}/>
      <HorizontalList data={data.recetas} titulo={"RECENT"} imgHeight={190} imgWidth={170}/>
    </SafeAreaView>
  ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },

});
