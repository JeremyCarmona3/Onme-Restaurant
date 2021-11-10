import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoteSection from './comps/NoteSection';
import OrderDisplay from './comps/OrderDisplay';
import QtyItem from './comps/QtyItem';
import MeunItem from './comps/MenuItem';

export {default} from './storybook'; 



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MeunItem/>
//       <StatusBar style="auto" />
//     </View>
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
