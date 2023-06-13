import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SearchBar = ({ recipes, setFilteredRecipes }) => {
  const [searchTerm, setSearchTerm] = useState("");
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
      navigation.navigate("Detalle", {
        item: suggestion,
        section: "suggestions",
      });
    }
  };

  const handleBlur = () => {
    setSuggestions([]);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.barra]}>
        <Feather style={styles.icon} name="search" size={20} color="#f5fdff" />
        <TextInput
          style={styles.input}
          placeholder="What do you want to eat? "
          placeholderTextColor="#f5fdff"
          value={searchTerm}
          onChangeText={handleSearch}
          onBlur={handleBlur}
        />
        <FontAwesome
          style={styles.icon}
          name="microphone"
          size={20}
          color="#ffffff"
        />
      </View>
      {searchTerm.length > 0 && (
        <View style={styles.suggestionsContainer}>
          {suggestions.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleSuggestionPress(item)}
              style={styles.suggestionItem}
            >
              <Text style={styles.suggestionText}>{item.nombre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  row: {
    flexDirection: "row",
  },
  barra: {
    backgroundColor: "#343435",
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 5,
    color: "#f5fdff",
  },
  suggestionsContainer: {
    flexDirection: "column",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: -10,
    backgroundColor: "#343435",
    borderRadius: 10,
    maxHeight: 100,
    paddingHorizontal: 7,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 370,
  },
  suggestionItem: {
    paddingVertical: 5,
  },
  suggestionText: {
    fontSize: 16,
    color: "#f5fdff",
  },
});

export default SearchBar;
