import { FlatList, StyleSheet, Text, View , Image} from 'react-native';
import React, { useEffect, useState } from 'react';

const UserData = () => {
  const [data, setData] = useState([]);
  const[isloaded,setloaded]=useState(true);

  const getuserdata = async () => {
    try {
      const res = await fetch("https://thapatechnical.github.io/userapi/users.json");
      const realdata = await res.json(); 
      setData(realdata);
      console.log(realdata);
      setloaded(false)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuserdata();
  }, []);
  const showUserData=({item})=>{
    return(
      <View style={styles.studentcard}>
        <View style={styles.container}>
      <View>
        <Image style={styles.img}  source={{uri:item.image}}/>
      </View>
      
        <View style={styles.biodata}>
        <Text style={styles.biodatatxt} >Bio-Data</Text>
        <Text style={styles.biodatatxt}>{item.id<10 ? `#0${item.id}` : `#${item.id}`}</Text>
        </View>
        <View style={styles.details}>
        <Text style={styles.stddet}>Name:{item.name}</Text>
        <Text style={styles.stddet}>Email:{item.email}</Text>
        <Text style={styles.stddet}>Phone_no:{item.mobile}</Text>

        </View>
        </View>
       
      </View>
      
    )
  }

  return (
    <View>
      <Text style={styles.los}>List Of Students</Text>
      <FlatList data={data} renderItem={showUserData} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  );
};

export default UserData;


const styles = StyleSheet.create({
    los:{
    textAlign:'center',
    fontSize:30,
    fontWeight:"bold",
  textTransform:"uppercase" 
 },
  studentcard: {
    flexDirection: 'column', // To arrange views horizontally
    alignItems: 'center',
    marginBottom:20,
   
  
    // To vertically center align within the parent View
  },
  // centeredContainer: {
  //   flex: 1, // Takes up the available horizontal space
  //   alignItems: 'center', // Horizontally centers its content
  // },
  img: {
    width: 200, 
    height:200,// Set your desired width
    resizeMode: 'cover',
    borderRadius:10 // Adjust the image size mode as needed
  },
  biodata:{
    backgroundColor:"#008080",
   
    width:200,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    borderRadius:10,
    marginTop:10

  },
  biodatatxt:{
    color:"white",
  },
   details:{
    marginRight:14

   },
   stddet:{
    lineHeight:26,
    fontWeight:"bold"
   },
   container:{
    borderColor:"gray",
    borderRadius:13,
    borderWidth:3,
    padding:30,
    marginLeft:20,
    marginTop:50
   }
  

});

