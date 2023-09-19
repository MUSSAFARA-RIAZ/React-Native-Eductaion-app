import { StyleSheet, Text, TextInput, View , TouchableWithoutFeedback , TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation=useNavigation('')

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [phoneno,setphoneno]=useState('');
  const[msg,setmsg]=useState('')
  const [agree,setagree]=useState(false)
  const handlePress = () => {
    // Handle the onPress event here
    console.log('Button pressed!');
  };
  const  submit=()=>{
    if(!name && !email && !phoneno && !msg){
      alert("Please fill all fields")
    }
    else{
      alert(`Thanks${name}`)
      navigation.navigate("login")
    }
  }

  // const [isSelected, setSelection] = useState(false);
  return (
    <ScrollView>
    <View style={styles.maincontainer}>
      <View style={styles.TextContainer}>
      <Text style={styles.mainHeader}> Level Up Your Knowledge</Text>
      <Text style={styles.subhead}>You can reach us at anytime riazmussafara@gmail.com</Text>

      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.label}>Enter Your Name</Text>
        <TextInput style={styles.inputfield} value={name} onChangeText={(data)=>setname(data)}  placeholder={"Mussafara_Riaz"}/>
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.label} >Enter Your Email</Text>
        <TextInput  style={styles.inputfield}   value={email} onChangeText={(e)=>setemail(e)}  placeholder={"email@gmail.com"}/>
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.label}>Enter Your Mobile</Text>
        <TextInput style={styles.inputfield}  value={phoneno} onChangeText={(p)=>setphoneno(p)} placeholder={"03002304485"}/>
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.label}>Tell Us about Youself</Text>
        <TextInput  style={[styles.input,styles.multilinestyles]} onChangeText={(m)=>setmsg(m)} numberOfLines={5} placeholder={"Mussafara_Riaz"}/>
      </View>
      <TouchableWithoutFeedback onPress={toggleCheckbox}>
      <View style={styles.checkboxContainer}>
        <View style={[styles.checkbox, isChecked && styles.checked]}></View>
        <Text>I have read and agreed with the rules</Text>
      </View>
    </TouchableWithoutFeedback>
    <View style={styles.container}>
      <TouchableOpacity  style={[styles.button,{
        backgroundColor:agree ? "yellow" : "gray"
      },]} onPress={submit} >
        <Text style={styles.buttonText}>Contact Us!</Text>
      </TouchableOpacity>
    </View>
 
  


    </View>
    </ScrollView>
  )
}

export default Contact

const styles = StyleSheet.create({
  maincontainer:{
    height:'100%',
    paddingHorizontal:35
  },
  mainHeader:{
    color:"#344055",
    textTransform:"uppercase",
    fontSize:21,
    fontWeight:"bold",
    paddingTop:20,
    paddingBottom:20
  },
  subhead:{
    color:"#7d7d7d",
    fontSize:21
  },
  InputContainer:{
    paddingTop:20
  },
  inputfield:{
    borderColor:"rgba(0,0,0,0.3)",
    borderWidth:1,
    padding:5,
    borderRadius:7
  },
  label:{
    color:"#6c6f9a" ,
    marginBottom:10,
    fontWeight:"bold"
  },
  multilinestyles:{
    paddingVertical:10,
    borderColor:"rgba(0,0,0,0.3)",
    borderWidth:1,
    borderRadius:7
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'blue', // You can use your desired color here
    borderColor: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

})