import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from './api/Coursesaapi'
import { useNavigation } from '@react-navigation/native'
import { useFonts, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
const Course = () => {
  const navigation=useNavigation();
  let[fontsLoaded]=useFonts({
     
    Nunito_700Bold,
    Nunito_600SemiBold
 });
 if (!fontsLoaded) {
   return
   <AppLoading/>
 }
  const CourseCard=({item})=>{  
    return(
      <View style={styles.parent} >
        <View style={styles.card}>
          <Image style={styles.img} source={item.image}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.txt}>{item.description}</Text>
          <TouchableOpacity style={styles.btnparent} onPress={()=>navigation.navigate("Coursedetails",{
            courseid:item.id,

          })} >
      <View style={styles.button} >
        <Text style={styles.buttonText}>Course Details</Text>
      </View>
    </TouchableOpacity>
        </View>
      </View>

    )
  }
  return (
    <View>
      <FlatList keyExtractor={(item)=>item.id}
      data={Courses}
      renderItem={CourseCard}/>

    </View>
  )
}

export default Course

const styles = StyleSheet.create({
  img:{
    width:'100%',
    resizeMode:"contain",
    aspectRatio:1,
    height:undefined,
    marginBottom:0
    
  },
  button: {
    backgroundColor: '#809fff',
    padding: 10,
    borderRadius: 5,
    width:"50%",
    margin:"auto"

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  parent:{
    paddingHorizontal:20,
    marginTop:10
  },
  card:{
    backgroundColor:"white",
    shadowColor:"gray",
    padding:20,
    marginBottom:20,
    textAlign:"center",
    elevation:8,
    borderRadius:10
  },
  title:{
    
    fontSize:25,
    marginTop:-10,
    textAlign:"center"

  }
  ,
  txt:{
    lineHeight:26,
    fontFamily:  'Nunito_600SemiBold'
  },
  btnparent:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15
  }

})