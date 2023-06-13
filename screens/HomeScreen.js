import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  NativeModules,
} from "react-native";
const { StatusBarManager } = NativeModules;
import { StatusBar } from "expo-status-bar";
import SearchBar from "../components/SearchBar";
import HorizontalList from "../components/horizontalList";

const data = require("../Recetas.json");

export default function HomeScreen({ navigation }) {
  const [filteredRecipes, setFilteredRecipes] = useState(data.recetas);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SearchBar
        recipes={data.recetas}
        setFilteredRecipes={setFilteredRecipes}
      />
      <View style={styles.contentContainer}>
        <HorizontalList
          data={data.recetas}
          titulo={"TRENDING"}
          imgHeight={115}
          imgWidth={115}
        />
        <HorizontalList
          data={data.recetas}
          titulo={"RECENT"}
          imgHeight={190}
          imgWidth={170}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
  },
  contentContainer: {
    flex: 1,
    marginBottom: 0,
  },
});
