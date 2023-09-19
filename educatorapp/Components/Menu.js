import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
        <Image style={styles.iconstyle} source={{uri:"https://img.icons8.com/dusk/64/new-contact.png"}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('About')}>
        <Image style={styles.iconstyle} source={{uri:'https://img.icons8.com/external-others-pike-picture/50/external-about-inbound-marketing-others-pike-picture.png'}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Course')}>
        <Image style={styles.iconstyle} source={require('../assets/Icons/training.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('UserData')}>
        <Image style={styles.iconstyle} source={require("../assets/Icons/userdata.png")}/>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:50
    },
    iconstyle:{
        width:'100%',
        height:50,
        aspectRatio:1,
       
    }
})