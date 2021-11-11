import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';

import styled from 'styled-components/native';

import NavBar from '../comps/NavBar';
import OpenText from '../comps/OpenText';
import OrderStatsCard from '../comps/OrderStatsCard';
//import NewOrder from '../comps/NewOrder';


// const DashCont = styled.View`
//   width: 100px;
//   height: 100px;
//   background-color: #fad;
// `;

const DashCont = styled.View`
flex-direction: row;
`;

const Navigation = styled.View`
  display: flex;
  max-height: 100%;
 
`;

const Cards = styled.View`
  flex-direction: row;
`;

// const StatsLine = styled.View`
//   margin-top:10% ;
// `;


// const HeaderText = styled.View`
//   display:flex;
//   align-items: flex-start;
// `;



export default function Dashboard({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
            {/* <NewOrder></NewOrder> */}
            <DashCont>

              <Navigation>
               <NavBar/>
              </Navigation>

              {/* <StatsLine>
                <NewOrder/>
              </StatsLine> */}

              
              <Cards>
                <OrderStatsCard totnumcus="SALES SUMMARY" num="$100"/>
                <OrderStatsCard /> 
              </Cards>

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