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
  {/* description */}
  <Text style={styles.description}>
  Lorem ipsum dolor sit amet, consectetur
  Lorem ipsum dolor sit amet, consectetur
  Lorem ipsum dolor sit amet, consectetur
  Lorem ipsum dolor sit amet, consectetur
  </Text>
  {/* data */}
  <View style={styles.data}>
    <Text style={styles.heading}>
        by: <Text style={styles.author}>
            Shreya Rajpal
        </Text>
    </Text>
    <Text style={styles.date}> Aug 9th 22</Text>
  </View>

{/* Source */}
<View style={{marginTop:10}}>
<Text style={styles.source}> Hindustan Times</Text>
</View>
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
    fontWeight:"600",
    marginTop:10
  },
  description:{
    fontSize:16,
    fontWeight:"400",
    marginTop:10
  },
  data:{
   flexDirection: "row",
   justifyContent:"space-between",
   marginTop:10
  },
  date:{ 
   fontWeight:"bold",
   color:"red",
   fontSize: 15
  },
  heading:{
  
  },
  author:{
    fontWeight:"bold",

  },
  source:{

color:"red",
fontWeight:"bold",
fontSize: 15

  }

});
