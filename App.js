import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, Button, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 20,
          borderWidth: 2,
          borderColor: "black",
          padding: 10,
        }}
      >
        Hello world
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
