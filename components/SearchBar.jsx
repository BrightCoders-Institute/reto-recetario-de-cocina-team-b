import React, { useState } from 'react';
import { TextInput } from 'react-native';

const SearchBar = ({ recipes, setFilteredRecipes }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filteredRecipes = recipes.filter(recipe =>
      recipe.nombre.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <TextInput
      placeholder="Buscar recetas..."
      value={searchTerm}
      onChangeText={handleSearch}
    />
  );
};

export default SearchBar;
