import {View, TextInput} from "react-native";
import react from "react";
import SearchScreen from "../screens/SearchScreen";

const SearchBar=()=>{
    return (
        <View>
            <TextInput
            placeholder="Search"
            style={styles.input}/>

        </View>
    )
}
export default SearchScreen;
const styles= StyleSheet.create({
    container: {

margin: 10
    },
    input:{
        backgroundColor:"saphhire",
        padding:10,
        borderRadius: 10,
        color:"pink",
        borderWidth: 1,
    }
})