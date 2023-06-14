import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const RecipeDetail = (props) => {
  const item = props.item;
  const { nombre, porciones, ingredientes } = item;

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Ingredients</Text>
      <Text style={styles.textTitle}>for {porciones} Servings</Text>
      <ScrollView>
        <View>
          {ingredientes &&
            ingredientes.map((ingrediente, index) => (
              <View key={index} style={styles.item}>
                <Text
                  style={styles.itemText}
                >{`${ingrediente.ingrediente}`}</Text>
                <Text style={styles.itemText}>{`${ingrediente.cantidad}`}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#282828',
  },
  textTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 10,
  },
  item: {
    flex: 1,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#2E2E2E',
    borderBottomWidth: 2,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 16,
    paddingBottom: 15,
  },
});

export default RecipeDetail;
