import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, Button, Text, SafeAreaView } from "react-native";
import Article from "./components/Article";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
