import React, { useState } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather,  FontAwesome} from '@expo/vector-icons';
import StyleSearchBar from '../styles/StyleSearchBar'; 

function SearchBar({ recipes, setFilteredRecipes }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchTerm(text);

    const filteredRecipes = recipes.filter((recipe) =>
      recipe.nombre.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredRecipes(filteredRecipes);

    const searchSuggestions = recipes.filter((recipe) =>
      recipe.nombre.toLowerCase().startsWith(text.toLowerCase())
    );

    setSuggestions(searchSuggestions);
  };

  const handleSuggestionPress = (suggestion) => {
    if (suggestion && suggestion.nombre) {
      setSearchTerm(suggestion.nombre);
      setFilteredRecipes([suggestion]);
      setSuggestions([]);
      navigation.navigate('Detalle', {
        item: suggestion,
        section: 'suggestions',
      });
    }
  };

  const handleBlur = () => {
    setSuggestions([]);
  };

  return (
    <View style={StyleSearchBar.container}>
      <View style={[StyleSearchBar.row, StyleSearchBar.barra]}>
        <Feather
          style={StyleSearchBar.icon}
          name="search"
          size={20}
          color="#f5fdff"
        />
        <TextInput
          style={StyleSearchBar.input}
          placeholder="What do you want to eat? "
          placeholderTextColor="#f5fdff"
          value={searchTerm}
          onChangeText={handleSearch}
          onBlur={handleBlur}
        />
        <FontAwesome
          style={StyleSearchBar.icon}
          name="microphone"
          size={20}
          color="#ffffff"
        />
      </View>
      {searchTerm.length > 0 && (
        <View style={StyleSearchBar.suggestionsContainer}>
          {suggestions.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleSuggestionPress(item)}
              style={StyleSearchBar.suggestionItem}
            >
              <Text style={StyleSearchBar.suggestionText}>{item.nombre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

export default SearchBar;