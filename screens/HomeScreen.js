import React, { useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Platform, NativeModules, FlatList } from 'react-native';
const { StatusBarManager } = NativeModules;
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../components/SearchBar';
import ListItem from '../components/listItem';
import HorizontalList from '../components/horizontalList';

const data = require('../Recetas.json')

export default function HomeScreen({navigation}){

  const [filteredRecipes, setFilteredRecipes] = useState(data.recetas); // Estado para almacenar las recetas filtradas
  
  
  
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <SearchBar recipes={data.recetas} setFilteredRecipes={setFilteredRecipes} /> 
      <FlatList
        data={filteredRecipes}
        renderItem={({item})=><ListItem recipe={item}/>}
        keyExtractor={(item)=>item.id.toString()}
        ListEmptyComponent={<Text>No existe mi bro lo siento</Text>}
      />
      <HorizontalList data={data.recetas} titulo={"TRENDING"} imgHeight={115} imgWidth={115} />
      <HorizontalList data={data.recetas} titulo={"RECENT"} imgHeight={190} imgWidth={170}  />
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
