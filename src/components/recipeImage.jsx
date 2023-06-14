import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  NativeModules,
  Text,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import StyleRecipeImage from '../styles/StyleRecipeImage';

const { StatusBarManager } = NativeModules;

function RecipeImage(props) {
  return (
    <ImageBackground source={{ uri: props.img }} style={StyleRecipeImage.container}>
      <View style={StyleRecipeImage.content}>
        <View style={StyleRecipeImage.rowSpace}>
          <TouchableOpacity onPress={props.onPress}>
            <EvilIcons name="close" size={40} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={StyleRecipeImage.row}>
            <EvilIcons
              style={StyleRecipeImage.icon}
              name="share-apple"
              size={40}
              color="#FFFFFF"
            />
            <EvilIcons
              style={StyleRecipeImage.icon}
              name="heart"
              size={40}
              color="#FFFFFF"
            />
          </View>
        </View>
        <View>
          <Text style={StyleRecipeImage.textSection}>{props.section}</Text>
          <Text style={StyleRecipeImage.textTitle}>{props.title}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default RecipeImage;
