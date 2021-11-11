import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

//comps import

import NavBar from '../comps/NavBar';

//divs 
const OrderCont = styled.View`
flex-direction: row;
background-color: #fad;
`;

const OrderContCenter = styled.View`
display:flex;
flex-direction: row;
background-color: #fff;
width: 30%;
/* border-radius: 15px 0 0 15px; */
`;

const OrderContRight = styled.View`
display:flex;
flex-direction: row;
background-color: green;
width: 70%;
/* border-radius: 15px 0 0 15px; */
`;

//center items

const Header = styled.Text`
font-size: 24px;
font-weight: 600;
`;


export default function Orderpage() {
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
              <OrderCont>
                <NavBar/>

              <OrderContCenter>
                  <Header>Orders</Header>             
                  </OrderContCenter>

              <OrderContRight>

              </OrderContRight>
              </OrderCont>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff'
      }
    });