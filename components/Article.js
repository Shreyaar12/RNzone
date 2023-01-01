import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import moment from "moment";
import * as WebBrowser from "expo-web-browser";

const Article = (props) => {
  const goToSource = () => {
    WebBrowser.openBrowserAsync(props.url);
  };
  return (
    <Pressable style={styles.container} onPress={goToSource}>
      {/* image */}
      <Image
        source={{
          url: props.urlToImage,
        }}
        style={styles.image}
      />
      {/* title */}
      <View style={{ padding: 20 }}>
        <Text style={styles.title}> {props.title}</Text>
        {/* description */}
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>
        {/* data */}
        <View style={styles.data}>
          <Text style={styles.heading}>
            by: <Text style={styles.author}>{props.author}</Text>
          </Text>
          <Text style={styles.date}>
            {moment(props.publishedAt).format("MMM Do YY")}
          </Text>
        </View>

        {/* Source */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.source}> {props.sourceName}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </Pressable>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 20,
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
