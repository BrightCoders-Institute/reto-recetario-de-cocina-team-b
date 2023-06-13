import react from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";
import RecipeImage from "../components/recipeImage";
import RecipeDetail from "../components/recipeDetail";

function DetailScreen({ route, navigation }) {
  const recipe = route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <RecipeImage
        title={recipe.nombre}
        img={recipe.foto}
        section={route.params.section}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <RecipeDetail item={recipe} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default DetailScreen;
