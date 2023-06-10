import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

const RecipeDetail = (props) => {
  const  item = props.item;
  const {nombre, porciones, ingredientes}=item;

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>Ingredients</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>for {porciones} Servings</Text>
        {ingredientes && ingredientes.map((ingrediente, index) => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>{`${ingrediente.ingrediente}`}</Text>
            <Text>{`${ingrediente.cantidad}`}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RecipeDetail;
