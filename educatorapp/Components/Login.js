import { View, Text,Image , StyleSheet} from 'react-native'
//import { AntDesign } from '@expo/vector-icons';




// Render your component

import React from 'react'
import Menu from './Menu'
export default function Login() {
  return (
    <View>
      <Image style={styles.img} source={require("../assets/Images/Login.png")}/>
      <View style={{paddingTop:40,marginTop:-10}}>
      <Text style={styles.txt}>WELCOME TO</Text>
      <Text style={styles.mcoder}>M-CODER</Text>
      <Text style={styles.desc}> rem Ipsum is simply dum. Lorem Ipsum has been  when an unknown printer took a galley of type and scrambled it to make a type specimen book  </Text>
      {/* <Text style={styles.lstext}>Login/Signup</Text>
      <View style={{alignItems:"center"}}> 
        <Pressable style={styles.btn}>
        
    <AntDesign name="google" size={24} color="white" />

<Text style={{color:"white",marginTop:3,marginLeft:10}}>Continue With Google</Text>
   
        
        </Pressable>
      </View> */}
    

      </View>
      <Menu/>
    </View>
  )
}
const styles=StyleSheet.create({

  txt:{
    fontWeight:"bold",

    textAlign:"center",
    marginTop:10,
   
   
    fontSize: 32,
  },
  // btn:{
  //   flexDirection:"row",
  //   justifyContent:"center",
  //   marginTop:40,
  //   backgroundColor:"#008eff",
  //   color:"white",
  //   padding:20,
  //   width:"80%",
   
  // },
  // lstext:{
  //   textAlign:"center",
  //   fontWeight:"bold",
  //   fontSize:24,
  //   marginTop:100
  // },
  img:{
   marginTop:50,
   borderRadius:50,
   width:"90%",
   marginLeft:17,
   marginRight:5  
  },
  mcoder:{
    color:'#bb98ff',
    textAlign:"center",
    fontSize:40,
    marginTop:10

    

  },
  desc:{
    marginLeft:30,
    color:"#7d7d7d",
    marginTop:30,
    lineHeight:25
  }


})
