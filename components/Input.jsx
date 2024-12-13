import { View, StyleSheet, Text, TextInput} from "react-native";

function Input({text}){
    return(
        <View style={styles.container}>
            <Text style={styles.placeHolder}>{text}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10, 
        width: "100%"
    },
    placeHolder:{
        color: "#b3b3b3"
    },
    input:{
        borderBottomColor: "#b3b3b3",
        borderBottomWidth: 0.5
    }
})

export default Input