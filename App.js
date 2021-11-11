import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoteSection from './comps/NoteSection';
import OrderDisplay from './comps/OrderDisplay';
import QtyItem from './comps/QtyItem';
import MeunItem from './comps/MenuItem';
import OpenText from './comps/OpenText';
import NewOrder from './comps/NewOrder';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './pages';

const Stack = createNativeStackNavigator();

export {default} from './storybook'; 



// export default function App() {
//   return (
//     <NavigationContainer style={styles.container}>
//       <Stack.Navigator>
//         <Stack.Screen name="Dashboard" component={Dashboard} />
//       </Stack.Navigator>
//       {/* <MeunItem/>
//       <QtyItem/>
//       <OpenText/>
//       <NewOrder/> */}
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
