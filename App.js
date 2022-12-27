import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, Button, Text, SafeAreaView } from "react-native";
import Article from "./components/Article";

const HomeScreen = ()=> {
  return (
    <SafeAreaView style={styles.container}>
      <Article />
  <Text>
Ha bhai ghar ki screen
  </Text>
      <StatusBar style="auto" />
      </SafeAreaView>)

}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
