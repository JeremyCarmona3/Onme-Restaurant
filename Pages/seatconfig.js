import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Dashboard from '../pages/dashboard';
// import Orderpage from '../pages/orderspage3';

import NavBar from '../comps/NavBar/index';
import Button from  '../comps/Button/index';
import SeatMap from '../comps/SeatMap/index';


//header text
const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  width: 470px;
  padding: 10px;

`;

const LeftColumn = styled.View`
  flex: 1;
  padding: 20px;
`;

const RightColumn = styled.View`
  flex: 2;
  justify-content: flex-end;
  padding: 50px;

`;


export default function App({

}) {
  return (
    <View style={styles.container}>
      <NavBar></NavBar>

      <LeftColumn>
        <Title>Seat Configuration</Title>
        <Button></Button>
      </LeftColumn>

      <RightColumn>
        <SeatMap></SeatMap>
      </RightColumn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    
  },
});
