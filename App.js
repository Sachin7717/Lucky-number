import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  const [value, setValue] = React.useState('');
  return (
      <ImageBackground source="https://images.unsplash.com/photo-1503919275948-1f118d8ecf0b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={styles.container}>
    <View >

      <Text style={styles.firstHeading}>WELCOME TO LUCKY NUMBER</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Enter number here"
        keyboardType="numeric"
        placeholderTextColor={'black'}
        
      />
      <TouchableOpacity>
        <Text style={styles.button}>Wish me a Luck !</Text>
      </TouchableOpacity>
    </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    height:"100%",
  },
  firstHeading:{
    color:"black",
    fontSize:24,
    fontWeight:"bold",
    marginTop:50 ,
    // marginLeft:20
  },
  input:{
    height: 40,
    margin: 52,
    borderWidth: 1,
    padding: 10,
    alignSelf:"center",
    width:"50%",
    fontWeight:"bold",
    backgroundColor:"white",
    borderRadius:"20px",
    },
    button:{
      backgroundColor:"black",
      color:"white",
      padding: 10,
      width:"38%",
      alignSelf:"center",
      borderRadius:"20px",
      marginTop:40
    }
    
});
