import { StyleSheet, Text, View , Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import Courses from './api/Coursesaapi';
// import { useFonts, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

const Coursedetails = ({navigation,route}) => {
  const id=route.params.courseid;
  console.log(id)
  const selectedcourse=Courses.find((element)=>{
    return id===element.id
  })
 
//   let[fontsLoaded]=useFonts({
     
//     Nunito_700Bold,
//     Nunito_600SemiBold
//  });
//  if (!fontsLoaded) {
//    return
//    <AppLoading/>
//  }

  return (
    <View style={styles.parent}>
          <View style={styles.card}>
          <Image style={styles.img} source={selectedcourse.image}/>
          <Text style={styles.title}>{selectedcourse.title}</Text>
          <Text style={styles.txt}>{selectedcourse.description}</Text>
          <View style={styles.courses}>
          <Text style={styles.coursestext1}>{selectedcourse.course1}</Text>
          <Text style={styles.coursestext2}>{selectedcourse.course2}</Text>
          <Text style={styles.coursestext3}>{selectedcourse.course3}</Text>
          
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
  <Text style={styles.buttonText}>Join Now</Text>
</TouchableOpacity>

         
        </View>
    </View>
  )
}

export default Coursedetails

const styles = StyleSheet.create({
  
    img:{
      width:'100%',
      resizeMode:"contain",
      aspectRatio:1,
      height:undefined,
      marginBottom:0
      
    },
 
    parent:{
      paddingHorizontal:20,
      marginTop:10
    },
    card:{
      backgroundColor:"white",
      shadowColor:"gray",
      padding:30,
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
      // fontFamily:  'Nunito_600SemiBold'
    },
  
    courses:{
     flexDirection:'column',
     justifyContent:"space-evenly"
    },
    coursestext1:{
     backgroundColor:"pink",
     padding:15,
     borderRadius:10,
     fontSize:16,
     marginBottom:5
     
    },
    coursestext2:{
      backgroundColor:"lightblue",
      padding:15,
      borderRadius:10,
      fontSize:16,
      marginBottom:5
     
     },
     coursestext3:{
      backgroundColor:"lightgreen",
      padding:15,
      borderRadius:10,
      fontSize:16,
      marginBottom:5

     },
    buttonContainer: {
      backgroundColor: '#809fff',
      paddingVertical: 10, 
      paddingHorizontal: 20, 
      borderRadius: 5,
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '50%',
      alignSelf: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  
  })
