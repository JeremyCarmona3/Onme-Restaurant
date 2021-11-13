import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import NoteSection from './comps/NoteSection';
// import OrderDisplay from './comps/PinkOrderBar';
// import QtyItem from './comps/QtyItem';
// import MenuItem from './comps/MenuItem';
// import OpenText from './comps/OpenText';
// import NewOrder from './comps/NewOrder';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './pages/dashboard';
import Orderpage from './pages/orderspage';


//note(alicia):import ___ from..___ then <stackscreem name... comment out other pages to see one page at a time (until the routes are done)
const Stack = createNativeStackNavigator();

// export {default} from './storybook'; 



export default function App() {
  return (
     <NavigationContainer style={styles.container}>
      <Stack.Navigator>
      
        // {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        // <Stack.Screen name="Orderpage" component={Orderpage} />
       
        
      </Stack.Navigator>
   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
