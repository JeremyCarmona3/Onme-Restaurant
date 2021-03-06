import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';

import styled from 'styled-components/native';

import NavBar from '../comps/NavBar';
import OpenText from '../comps/OpenText';
import OrderStatsCard from '../comps/OrderStatsCard';
import NewOrderLine from '../comps/NewOrderLine';
import PinkOrderBar from '../comps/PinkOrderBar';

import AddItemToMenu from '../comps/AddItemToMenu';

const DashCont = styled.View`
flex-direction: row;
`;

const Cards = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const RightCol = styled.View`
  flex-direction: column;
  margin: 6%;
  justify-content: space-between;
`;
const MiddleSection = styled.View`
`;

const NewOrderLine2 =styled.View`
  margin-bottom: 3%;
`;

const BottomSection = styled.View`
`;


export default function Dashboard({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
            {/* <NewOrder></NewOrder> */}
            <DashCont>

              <NavBar
                homeOnPress={() => navigation.navigate('Dashboard')}
                ordersOnPress={() => navigation.navigate('OrdersPage3')}
                seatconfigOnPress={() => navigation.navigate('EditSeatConfig')}
                menuconfigOnPress={() => navigation.navigate('Menu1')}
                
              />

              <RightCol>
              <OpenText/>

              <MiddleSection>
                <NewOrderLine2>
                  <NewOrderLine/>
                </NewOrderLine2>
                <PinkOrderBar 
                  onPress={() => navigation.navigate('OrdersPage3')} 
                  date="3 December 2021, 6:00PM"/>
              </MiddleSection>

              <BottomSection>
              <NewOrderLine2>
                <NewOrderLine headingtext="Order Statistics"/>
              </NewOrderLine2>

                <Cards>
                 <OrderStatsCard totnumcus="SALES SUMMARY" num="$100"/>
                  <OrderStatsCard /> 
                </Cards>
              </BottomSection>

              </RightCol>
             
            </DashCont>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  });
