import react from "react";
import { View, Text } from "react-native";
import HomeScreen from "./HomeScreen";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen </Text>
    </View>
  );
};
export default SearchScreen;

const styles= Stylesheet.create({
  container:{
    flex:1,
    backgroundColor:"grey",
  }
})