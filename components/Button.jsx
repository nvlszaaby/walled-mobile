// import { text } from "express";
import {TouchableOpacity, Text, StyleSheet} from "react-native"

function Button({ bgColor="#19918F", text, handlePress}){
    return(
        <TouchableOpacity 
          onPress= {handlePress} 
          style={{...styles.button, backgroundColor: bgColor}}
        >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4DB6AC',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 15,
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default Button;