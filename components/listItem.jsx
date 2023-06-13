import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListItem = ({ img, text, item, height, width, section }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles({ height, width }).container}
      onPress={() => navigation.navigate("Detalle", { item, section })}
    >
      <Image
        style={styles({ height, width }).img}
        source={{
          uri: img,
        }}
      />
      <Text style={styles({ height, width }).text}>{text}</Text>
    </TouchableOpacity>
  );
};

function styles({ height, width }) {
  return StyleSheet.create({
    container: {
      marginLeft: 10,
      marginTop: 15,
      flex: 1,
    },
    text: {
      fontSize: 13,
      color: "#FFFFFF",
      marginBottom: 25,
    },
    img: {
      borderRadius: 4,
      height: height,
      width: width,
      marginBottom: 10,
    },
  });
}

export default ListItem;
