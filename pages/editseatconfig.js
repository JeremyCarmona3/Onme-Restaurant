import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Dashboard from './pages/dashboard';
// import Orderpage from './pages/orderspage';

import NavBar from '../comps/NavBar/index';
import Button from  '../comps/Button/index';
import SeatMap from '../comps/SeatMap/index';


//header text
const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;

`;

const LeftColumn = styled.View`
  flex: 1;
  padding: 20px;
  width: 100%;
`;

const ButtonCont = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

const RightColumn = styled.View`
  flex: 2;
  justify-content: flex-end;
  padding: 50px;

`;


export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        homeOnPress={() => navigation.navigate('Dashboard')}
        ordersOnPress={() => navigation.navigate('OrdersPage3')}
        seatconfigOnPress={() => navigation.navigate('EditSeatConfig')}
        menuconfigOnPress={() => navigation.navigate('Menu1')}
      />

      <LeftColumn>
        <Title>Seating Configuration</Title>
        <ButtonCont>
          <Button buttontext='SAVE' buttoncolor='#FE4370'></Button>
        </ButtonCont>
      </LeftColumn>

      <RightColumn>
        <SeatMap></SeatMap>
      </RightColumn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    
  },
});