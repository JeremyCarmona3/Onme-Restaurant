import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from '../comps/NavBar';
import Buttons from '../comps/Button';
import MenuCard from '../comps/Card';
import AddItemCard from '../comps/AddItemCard';
import Icons from '../comps/MenuIcon';

// export {default} from './storybook'; 

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.right_con}>
        <View>
          <Text style={styles.Title}>Menu</Text>
        </View>
        <View style={styles.edit_menu}>
          <View  style={styles.edit_btns}>
            <Buttons margin="20" buttoncolor="#FE4370" buttontext="SAVE" />
            <Buttons buttoncolor="#FE4370" buttontext="DISCARD CHANGES" />
          </View>
          <Icons />
        </View>
        <View style={styles.line}></View>
        <View style={styles.add_items}>
          <Buttons textcolor="black" buttoncolor="#B5B5B5" buttontext="ADD CATEGORY" />
        </View>
        <View  style={styles.Sub_edit}>
          <Icons iconimage={require('../assets/removeitemicon.png')} iconheight="36px" iconwidth="36px" />
          <Text style={styles.Subtitle}>Popular Items</Text>
          <Icons iconimage={require('../assets/popularitemicon.png')} iconheight="39px" iconwidth="39px" />
        </View>
        <View style={styles.card_con}>
          <AddItemCard />
          <MenuCard itemname="Martini a la Ravioli" image={require('../assets/martini.png')} />
          <MenuCard />
        </View>
      </View>
      
    </View>
  );
}

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
    // border: '1px',
    margin: '4%',
    marginTop: '4%',
  },

  add_items:{
    marginBottom: '3%',
    marginLeft: '3%',
  },

  Title:{
    // fontWeight: 600,
    // fontSize: '48px',
    marginLeft: '3%',
  },

  Sub_edit:{
    flexDirection:'row',
    marginLeft: '3%',
    alignItems: 'center',
  },

  Subtitle:{
    // fontWeight: 'normal',
    // fontSize: '36px',
    marginLeft: '1%',
    marginRight: '1%',
  },

  card_con:{
    flexDirection: 'row',
    margin: '4%',
  }
});
