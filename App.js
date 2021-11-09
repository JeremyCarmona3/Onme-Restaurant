import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoteSection from './comps/NoteSection';
import OrderDisplay from './comps/OrderDisplay';
import QtyItem from './comps/QtyItem';
import MeunItem from './comps/MenuItem';
import OpenText from './comps/OpenText';
import NewOrder from './comps/NewOrder';



// export {default} from './storybook'; 



export default function App() {
  return (
    <View style={styles.container}>
      <MeunItem/>
      <QtyItem/>
      <OpenText/>
      <NewOrder/>

      <StatusBar style="auto" />
    </View>
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
