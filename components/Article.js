import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, Button,Image, Text, SafeAreaView } from "react-native";


const Article = ()=> {
  return (
    <SafeAreaView style={styles.container}>
        {/* image */}
        <Image source={{
            url:"../images/thisisengineering.jpg"
        }}
        style={styles.image}/>
        {/* title */}

  <Text style={styles.title}> News
    Article
  </Text>
  
      <StatusBar style="auto" />
      </SafeAreaView>)

}

export default Article;


const styles = StyleSheet.create({
  container: {
    width:"90%",
    alignSelf:"center",

    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    height:200,
    width: "100%"
  },
  title:{
    fontSize:18,
    fontWeight:"bold",
    marginTop:10
  }
});
