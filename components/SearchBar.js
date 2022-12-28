import {View, TextInput, StyleSheet} from "react-native";
import react from "react";
import SearchScreen from "../screens/SearchScreen";

const SearchBar=(props)=>{
    return (
        <View>
            <TextInput
            placeholder="Search"
            style={styles.input}
            value={props.searchText}
            onChangeText={(text)=>props.setSearchText(text)}

            
            />

        </View>
    )
}
export default SearchBar;
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