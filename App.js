import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './pages/dashboard';
import EditSeatConfig from './pages/editseatconfig';
import Menu1 from './pages/menu1';
import Menu2 from './pages/menu2';
import Menu3 from './pages/menu3';
import Menu4 from './pages/menu4';
import OrdersPage3 from './pages/orderspage3';
import SeatConfig from './pages/seatconfig';




import NavBar from './comps/NavBar/index';
import Button from  './comps/Button/index';
import SeatMap from './comps/SeatMap/index';

//note(alicia):import ___ from..___ then <stackscreem name... comment out other pages to see one page at a time (until the routes are done)
const Stack = createNativeStackNavigator();

//export {default} from './storybook'; 



 export default function App() {
   return (
     <NavigationContainer style={styles.container}>
       <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none'}} >
       {/* screenOptions={{ headerShown: false}} */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="EditSeatConfig" component={EditSeatConfig}/>
        <Stack.Screen name="Menu1" component={Menu1}/>
        <Stack.Screen name="Menu2" component={Menu2}/>
        <Stack.Screen name="Menu3" component={Menu3}/>
        <Stack.Screen name="Menu4" component={Menu4}/>
        <Stack.Screen name="OrdersPage3" component={OrdersPage3}/>
        <Stack.Screen name="SeatConfig" component={SeatConfig}/>
       </Stack.Navigator>
     </NavigationContainer>
   );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    
  },
});
