import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Platform, NativeModules} from 'react-native';
const { StatusBarManager } = NativeModules;
import { StatusBar } from 'expo-status-bar';
import { SearchBar } from '@rneui/themed';
import ListItem from '../components/listItem';

export default function HomeScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <SearchBar
        placeholder="What do you want to eat?"
      />
      <ListItem text="Peperoni Pizza Pockets" img="https://recetinas.com/wp-content/uploads/2019/09/galletas-de-chocolate-al-microondas-1.jpg"/>
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
