import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import ListItem from './listItem';

const HorizontalList = ({ titulo, data, imgHeight, imgWidth}) =>{
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{ titulo }</Text>
      <FlatList 
        data={ data }
        renderItem={({item}) =>(
          <ListItem img={item.foto} text={item.nombre} height={imgHeight} width={imgWidth} /> 
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'auto',
    flexGrow: 0,
    flexDirection: 'column',
  },
  text:{
    color: '#C21E6A',
    fontSize: 30,
    textTransform: 'uppercase',
  },
});

export default HorizontalList;