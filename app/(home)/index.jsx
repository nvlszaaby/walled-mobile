import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import Button from '../../components/Button';
// import Input from '../components/Input';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}


// export default function Home() {
//   return (
//     <View style={styles.container}>
//     <Link>
//       <Image source={require('../assets/logo.png')} style={styles.logo}/>
      
//       <TextInput 
//         style={styles.input} 
//         placeholder="Fullname" 
//         placeholderTextColor="#aaa"
//         // keyboardType='email-address' 
//       />
      
//       <TextInput 
//         style={styles.input} 
//         placeholder="email" 
//         placeholderTextColor="#aaa" 
//         secureTextEntry={true} 
//         keyboardType='email-address' 
//       />
      
//       <TextInput 
//         style={styles.input} 
//         placeholder="Password" 
//         placeholderTextColor="#aaa" 
//         secureTextEntry={true} 
//       />

//        <TextInput 
//         style={styles.input} 
//         placeholder="Avatar URL" 
//         placeholderTextColor="#aaa" 
//         secureTextEntry={true} 
//       />


//       <Input text="Notes"/>
//       <Link href="/home">
//         Ke Home
//       </Link>
//       <Button text="Login"/>
//       <StatusBar style="auto" />
//       </Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   logo: {
//     // width: 100,
//     // height: 100,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 15,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: '#f9f9f9',
//     fontSize: 16,
//   },
// });

export default function Home() {
  const [user, setUser] = useState({})
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          const res = await axios.get(
            "https://6776-182-3-53-7.ngrok-free.app/profile",
            {
              headers: {
                Authorization: `Bearer ${value}`,
              },
            }
          );
          const user = res.data.data
          console.log(user)
          setUser(user)
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {user?.fullname && <Text>{user.fullname}</Text>}
      <Text>Home Screen</Text>
      {/* <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
