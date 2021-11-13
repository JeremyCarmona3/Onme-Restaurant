import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
// import NoteSection from './comps/NoteSection';
// import OrderDisplay from './comps/PinkOrderBar';
// import QtyItem from './comps/QtyItem';
// import MenuItem from './comps/MenuItem';
// import OpenText from './comps/OpenText';
// import NewOrder from './comps/NewOrder';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './pages/dashboard';
<<<<<<< HEAD
=======
import NavBar from './comps/NavBar';
import Buttons from './comps/Button';
import MenuCard from './comps/Card';
import AddItemCard from './comps/AddItemCard';
import Icons from './comps/MenuIcon';
>>>>>>> ba743c7f5e09dd56adc1f50a1ca718137baf7f15
=======
import Orderpage from './pages/orderspage';
>>>>>>> 11707b8b425b9c042a11bc90c3fa82cb37a88e53


<<<<<<< HEAD
//note(alicia):import ___ from..___ then <stackscreem name... comment out other pages to see one page at a time (until the routes are done)
// const Stack = createNativeStackNavigator();

<<<<<<< HEAD
//export {default} from './storybook'; 



 export default function App() {
   return (
     <NavigationContainer style={styles.container}>
       <Stack.Navigator>
      
        <Stack.Screen name="Dashboard" component={Dashboard} />

       
        
       </Stack.Navigator>
       {/* <MeunItem/>
       <QtyItem/>
       <OpenText/>
       <NewOrder/> */}
     </NavigationContainer>
   );
 }
=======
export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.right_con}>
        <View>
          <Text style={styles.Title}>Menu</Text>
        </View>
        <View style={styles.edit_menu}>
          <View style={styles.edit_btns}>
            <Buttons buttoncolor="#FE4370" buttontext="SAVE" />
            <Buttons buttoncolor="#FE4370" buttontext="DISCARD CHANGES" />
          </View>
          <Icons />
        </View>
        <View style={styles.line}></View>
        <View style={styles.add_items}>
          <Buttons textcolor="black" buttoncolor="#B5B5B5" buttontext="ADD CATEGORY" />
        </View>
        <View  style={styles.Sub_edit}>
          <Icons iconimage={require('./assets/removeitemicon.png')} iconheight="36px" iconwidth="36px" />
          <Text style={styles.Subtitle}>Popular Items</Text>
          <Icons iconimage={require('./assets/popularitemicon.png')} iconheight="39px" iconwidth="39px" />
        </View>
        <View style={styles.card_con}>
          <AddItemCard />
          <MenuCard itemname="Martini a la Ravioli" image={require('./assets/martini.png')} />
          <MenuCard />
        </View>
      </View>
      
    </View>
  );
}
>>>>>>> ba743c7f5e09dd56adc1f50a1ca718137baf7f15
=======
// export {default} from './storybook'; 



export default function App() {
  return (
    <View>
      
    </View>
  );
}
>>>>>>> 11707b8b425b9c042a11bc90c3fa82cb37a88e53

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    flexDirection : 'row',
  },

  right_con:{
    flex: 1,
    justifyContent:'space-around',
  },

  edit_menu:{
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection : 'row',
    margin: '4%',
  },

  edit_btns:{
    flexDirection : 'row',
  },

  line:{
    height:0,
    width: '90%',
    border: '1px solid #DADADA',
    margin: '4%',
    marginTop: '3%',
  },

  add_items:{
    marginBottom: '3%',
    marginLeft: '4%',
  },

  Title:{
    fontWeight: 600,
    fontSize: '48px',
    marginLeft: '4%',
  },

  Sub_edit:{
    flexDirection:'row',
    marginLeft: '4%',
    alignItems: 'center',
  },

  Subtitle:{
    fontWeight: 'normal',
    fontSize: '36px',
    marginLeft: '1%',
    marginRight: '1%',
  },

  card_con:{
    flexDirection: 'row',
    margin: '4%',
  }
});
