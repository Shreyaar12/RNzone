import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Alert,
  Button,
  Image,
  Text,
  SafeAreaView,
} from "react-native";

const Article = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* image */}
      <Image
        source={{
          url: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
        style={styles.image}
      />
      {/* title */}
      <View style={{ padding: 20 }}>
        <Text style={styles.title}> News Article</Text>
        {/* description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
          sit amet, consectetur
        </Text>
        {/* data */}
        <View style={styles.data}>
          <Text style={styles.heading}>
            by: <Text style={styles.author}>Shreya Rajpal</Text>
          </Text>
          <Text style={styles.date}> Aug 9th 22</Text>
        </View>

        {/* Source */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.source}> Hindustan Times</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },

    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  date: {
    fontWeight: "bold",
    color: "red",
    fontSize: 15,
  },
  heading: {},
  author: {
    fontWeight: "bold",
  },
  source: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
});
