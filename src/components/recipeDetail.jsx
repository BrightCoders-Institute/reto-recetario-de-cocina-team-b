import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import StyleRecipeDetail from '../styles/StyleRecipeDetail';

const RecipeDetail = (props) => {
  const item = props.item;
  const { nombre, porciones, ingredientes } = item;

  return (
    <View style={StyleRecipeDetail.container}>
      <Text style={StyleRecipeDetail.textTitle}>Ingredients</Text>
      <Text style={StyleRecipeDetail.textTitle}>for {porciones} Servings</Text>
      <ScrollView>
        <View>
          {ingredientes &&
            ingredientes.map((ingrediente, index) => (
              <View key={index} style={StyleRecipeDetail.item}>
                <Text
                  style={StyleRecipeDetail.itemText}
                >{`${ingrediente.ingrediente}`}</Text>
                <Text style={StyleRecipeDetail.itemText}>{`${ingrediente.cantidad}`}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeDetail;
