import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Image, Pressable, Alert } from 'react-native';
import Button from '../components/Button';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
// import Input from '../components/Input';
import { Link, Stack } from 'expo-router';

export default function App() {

  const [isChecked, setChecked] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      
      <TextInput 
        style={styles.input} 
        placeholder="Fullname" 
        placeholderTextColor="#aaa"
        // keyboardType='email-address' 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa" 
        secureTextEntry={true} 
        keyboardType='email-address' 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        placeholderTextColor="#aaa" 
        secureTextEntry={true} 
      />

       <TextInput 
        style={styles.input} 
        placeholder="Avatar URL" 
        placeholderTextColor="#aaa" 
        secureTextEntry={true} 
      />
      <View styles={styles.tnc}>
        <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
        <Text style={styles.agree}>
          I have read and agree to the {" "}
          <Link href="/tnc">
            <Text style={{color:"#4DB6AC", fontWeight: 'bold'}}>
            Terms and Conditions
              </Text>
              </Link>
        </Text>
      </View>
      {/* <Input text="Notes"/> */}

      <Button text="Register"/>
      <Text>
            Already have account? {" "}
            <Link href="/(index)" style={styles.forgot}>
            Login Here
            </Link>
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    // width: 100,
    // height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  forgot: {
    color: "#4DB6AC",
    fontWeight: 'bold'
  },
  checkbox: {
    margin: 8,
    alignItems: "stretch"
  }, 
  tnc: {
    // height: 10,
    // flex:1, 
    alignItems: "center",
    flexDirection: "row", 
    justifyContent: "center"
  },
  Pressable: {
    color: "#4DB6AC",
    fontWeight: 'bold'
  }, 
  agree: {
    alignSelf: "flex-start",
    // fontSize: 16
  }, 
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }, 
  modalText: {
    marginBottom: 15,
     fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#4DB6AC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  }

});
