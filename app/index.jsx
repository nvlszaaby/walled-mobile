import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Button from '../components/Button';
// import Input from '../components/Input';
import { Link, router } from 'expo-router';
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import e from 'express';

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(4, { message: "Must be 8 or more characters long" })
})

export default function App() {
  const [form, setForm] = useState({ email: "", password: ""});
  const [errorMsg, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  

  const handleInputChange = (key, value) => {
    setForm({...form, [key]: value})
    try {
      LoginSchema.pick({[key]: true}).parse({[key]: value})
      setErrors((prev) => ({ ...prev, [key]: "" }))
    }
    catch (err) {
      setErrors((prev) => ({ ...prev, [key]: err.errors[0].message }))
    }
  }


  const handleSubmit = async () => {
    try {
      // console.log("masuk")
      LoginSchema.parse(form)
      // console.log(form)
      //const res=await axios.post("http://192.168.30.51:8081/login", form)
      const res=await axios.post("https://6776-182-3-53-7.ngrok-free.app/auth/login", form)
      // console.log(res.data.data, "sabi")
      
      await AsyncStorage.setItem("token", res.data.data.token)
      router.replace("/(home)")
    } catch (err) {
      if(axios.isAxiosError(err)){
        if (err.response) {
          setServerError(err.response.data.message || "An error occurred");
        } else if (err.request) {
          setServerError("Network error. Please try again later.");
          console.error("Network Error:", err.request);
        } else {
          setServerError("An unexpected error occurred.");
          console.error("Request Setup Error:", err.message);
        }
      } else if (err?.response){
        const error = {}
        err.errors.forEach((item) => {
          const key = item.path[0];
          errors[key] = item.message;
        })
        setErrors(errors)
      } else {
        setServerError("An unknown error occurred.");
        console.error("Unhandled Error:", err);
      } 
    }
  }

  return (
    <View style={styles.container}>
      {/* {serverError ? <Text>{serverError}</Text> : null} */}
      {serverError && <Text>{serverError}</Text>}
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      
      <TextInput 
        style={[styles.input, errorMsg.email && styles.inputError]} 
        placeholder="Email/Username" 
        placeholderTextColor="#aaa"
        keyboardType='email-address' 
        onChangeText={(text) => handleInputChange("email", text)}
        value={form.email}
      />

{/* menampilkan error message email */}
{errorMsg.email ? <Text style={styles.errorMsg}>{errorMsg.email}</Text> : null}
      
      <TextInput 
        style={[styles.input, errorMsg.password && styles.inputError]} 
        placeholder="Password" 
        placeholderTextColor="#aaa" 
        secureTextEntry={true} 
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />

{/* menampilkan error message email */}
{errorMsg.password ? <Text style={styles.errorMsg}>{errorMsg.password}</Text> : null}
    
      {/* <Input text="Notes"/> */}
      
      <Button handlePress={handleSubmit} text="Login"/>
      <Text style={styles.textAcc}>
        Don't have account? <Link href="/register" style={styles.register}>
        Register here
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
  inputError: {
    borderColor: "red"
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
    marginTop: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  register: {
    color: "#4DB6AC",
    fontWeight: 'bold'
    // alignItems: 'left',
  },
  textAcc: {
    color: "black",
    // fontWeight: 'bold'
  },
  errorMsg: {
    color: "red",
    fontSize: 12,
    width: "100%",
    textAlign: "left",
    marginTop: 5,
  }
});
