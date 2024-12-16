import { Link, Stack } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { userState } from 'react'
import { StatusBar } from 'expo-status-bar';
// import Button from '../components/Button';

export default function Transfer() {
    return (
      <View style={styles.container}>
        <Text>Top-up Screen</Text>
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