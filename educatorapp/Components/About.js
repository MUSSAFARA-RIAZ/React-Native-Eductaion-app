import { StyleSheet, Text, View , Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.parentdiv}>
      <Text style={styles.mainhead}>M-CODER</Text>
      <Text style={styles.title}>I'm Youtuber 😃</Text>
      <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/Images/about.png")}/>
      </View>
      <View style={styles.aboutme}>
        <Text style={styles.head}>ABOUT ME</Text>
        <Text style={styles.desc}>On this tech-savvy journey, we dive deep into the ever-evolving world of technology. From the latest gadgets and software reviews to programming tutorials and cutting-edge innovations, our channel is your go-to source for all things tech.
        </Text>
      </View>
      <View>
        <Text style={styles.socialmedia}>Follow Me On Social Network</Text>
        <View style={styles.parenticondiv}>
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.youtube.com/channel/UCFL-8zzI494ZoC95ZWZ9Omg")}>
          <Image style={styles.link} source={require("../assets/Icons/youtube.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.linkedin.com/in/mussafara-riaz-a38012213/")}>
          <Image style={styles.link}  source={require("../assets/Icons/linkedin.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.linkedin.com/in/mussafara-riaz-a38012213/")}>
          <Image style={styles.link}  source={require("../assets/Icons/instagram.png")}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image  style={styles.link}  source={require("../assets/Icons/facebook.png")}/>
          </TouchableOpacity>
          
        </View>

      </View>

    </View>
  )
}

export default About

const styles = StyleSheet.create({
  img:{
    width:100,
    height:100,
    aspectRatio:1,
    borderRadius:50,
    marginTop:30
 
    
  },
  container: {
  
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     // Center vertically
  },
  mainhead:{
    fontSize:26,
    textAlign:"center",
    color:"#0096FF"
  },
  title:{
    fontSize:34,
    textAlign:"center",
    fontWeight:"bold",
    marginTop:20
  },
  parentdiv:{
    marginTop:30
  },
  aboutme:{
    backgroundColor:"#000080",
    color:"white",
    padding:20,
    borderRadius:10,
    margin:10
  },
  head:{
    color:"white",
    textAlign:'center',
    fontWeight:"bold",
    fontSize:26
  },
  desc:{
    color:"orange",
    lineHeight:23,
    marginTop:8
  },
  socialmedia:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:23,
    marginTop:5
  },parenticondiv:{
    display:"flex",
  flexDirection:"row",
  justifyContent:"space-evenly",
  marginTop:30
  },
  link:{
    width:50,
    height:50,
    aspectRatio:1

  }

})