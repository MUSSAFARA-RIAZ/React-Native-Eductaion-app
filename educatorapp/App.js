
import Login from './Components/Login';
import About from './Components/About';
import Course from './Components/Course';
import Contact from './Components/Contact';
import UserData from './Components/UserData';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { useFonts, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';

//import AppLoading from 'expo-app-loading';
import Coursedetails from './Components/Coursedetails';


export default function App() {
  const Stack = createNativeStackNavigator();
  // let[fontsLoaded]=useFonts({
     
  //    Nunito_700Bold,
  //    Nunito_600SemiBold
  // });
  // if (!fontsLoaded) {
  //   return
  //   <AppLoading/>
  // }



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="login" options={{
          headerTitle:"Home Page",
          headerTitleStyle:{
            fontSize:25,
           
         //   fontFamily: fontsLoaded ? 'Nunito_600SemiBold' : 'sans-serif-bold'
          }

        }} component={Login} />
        <Stack.Screen name='About' options={{
          headerTitle:"About Page",
          headerTitleStyle:{
            fontSize:25,
           
           // fontFamily: fontsLoaded ? 'Nunito_600SemiBold' : 'sans-serif-bold'
          }

        }}  component={About}/>
        <Stack.Screen name='Contact'
        options={{
          headerTitle:"Contact Page",
          headerTitleStyle:{
            fontSize:25,
          
          //  fontFamily: fontsLoaded ? 'Nunito_600SemiBold' : 'sans-serif-bold'

          }
        }}
        component={Contact}/>
        <Stack.Screen name='Course'  options={{
          headerTitle:"Course Details",
          headerTitleStyle:{
            fontSize:25,
         //   fontFamily: fontsLoaded ? 'Nunito_600SemiBold' : 'sans-serif-bold'

          }
        }}
         component={Course}/>
        <Stack.Screen name='UserData'  options={{
          headerTitle:"Student Details",
          headerTitleStyle:{
            fontSize:25,
         //   fontFamily: fontsLoaded ? 'Nunito_600SemiBold' : 'sans-serif-bold'

          }
        }} component={UserData}/>
        <Stack.Screen name='Coursedetails' component={Coursedetails}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


