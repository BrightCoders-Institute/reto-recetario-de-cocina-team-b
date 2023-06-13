import React, { useState } from 'react';
import { TextInput, StyleSheet, View, FlatList,TouchableOpacity,Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ recipes, setFilteredRecipes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions,Setsuggestions]= useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filteredRecipes = recipes.filter(recipe =>
      recipe.nombre.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRecipes(filteredRecipes);
    setSuggestions([]);
  };
const handleSuggestionPress = (suggestion)=>{
  setSearchTerm(suggestion.nombre);
  setSuggestions([]);
  setFilteredRecipes([suggestion]);
};
  return (
    <View style={[styles.row,styles.barra]}>
      <Feather style={styles.icon} name="search" size={20} color="#f5fdff"/>
      <TextInput
        style= {styles.input}
        placeholder="What do you want to eat? "
        placeholderTextColor={ '#f5fdff' }
        value={searchTerm}
        onChangeText={handleSearch}
        onBlur={()=> setSuggestions([])}
      />
      <FontAwesome style={styles.icon} name="microphone" size={20} color="#ffffff"/> 
      {suggestions.length > 0 && (
        <View>
          <FlatList
            data={suggestions}
            renderItem={ ( {item}) => (
              <TouchableOpacity
              onPress={()=>handleSuggestionPress(item)}>
              <Text>{item.nombre}</Text>
            </TouchableOpacity>
            )}
          keyExtractor={(item)=> item.id.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
  },
  barra: {
    backgroundColor: '#343435',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 5, 
    paddingHorizontal: 7,
    marginBottom: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
  },
  input:{
    flex:1,
    paddingLeft: 5,
  }
})

export default SearchBar;
