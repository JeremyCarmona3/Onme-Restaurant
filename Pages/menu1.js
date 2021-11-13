import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from '../comps/NavBar';
import Buttons from '../comps/Button';
import MenuCard from '../comps/Card';
import Icons from '../comps/MenuIcon';

// export {default} from './storybook'; 

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <NavBar
        homeOnPress={() => navigation.navigate('Dashboard')}
        ordersOnPress={() => navigation.navigate('OrdersPage3')}
        seatconfigOnPress={() => navigation.navigate('EditSeatConfig')}
        menuconfigOnPress={() => navigation.navigate('Menu1')}
      />
      <View style={styles.right_con}>
        <View>
          <Text style={styles.Title}>Menu</Text>
        </View>
        <View style={styles.edit_menu}>
            <Buttons />
            <Icons />
        </View>
        <View style={styles.line}></View>
        <View  style={styles.Sub_edit}>
          <Text style={styles.Subtitle}>Popular Items</Text>
        </View>
        <View style={styles.card_con}>
          <MenuCard itemname="Martini a la Ravioli"/>
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
    margin: '4%',
    marginTop: '1%',
  },

  Title:{
    // fontWeight: 600,
    // fontSize: '48px',
    marginLeft: '4%',
  },

  Sub_edit:{
    flexDirection:'row',
  },

  Subtitle:{
    // fontWeight: 'normal',
    // fontSize: '36px',
    marginLeft: '4%',
  },

  card_con:{
    flexDirection: 'row',
    margin: '4%',
  }
});
