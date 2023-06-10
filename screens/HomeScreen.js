import React, { useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Platform, NativeModules} from 'react-native';
const { StatusBarManager } = NativeModules;
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../components/SearchBar';
import ListItem from '../components/listItem';
import HorizontalList from '../components/horizontalList';

const data = require('../Recetas.json')

export default function HomeScreen({navigation}){

  const [filteredRecipes, setFilteredRecipes] = useState(data.recetas); // Estado para almacenar las recetas filtradas

  const onPress = (item) => {
    navigation.navigate('Detalle',{item});
  };
  
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <SearchBar recipes={data.recetas} setFilteredRecipes={setFilteredRecipes} /> 
      <HorizontalList data={data.recetas} titulo={"TRENDING"} imgHeight={115} imgWidth={115} onPressItem={onPress} />
      <HorizontalList data={data.recetas} titulo={"RECENT"} imgHeight={190} imgWidth={170} onPressItem={onPress} />
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
