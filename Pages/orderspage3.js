import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

//comps import

import NavBar from '../comps/NavBar';
import OrderNumberCard from '../comps/OrderNumberCard';
import Button from '../comps/Button';
import OpenText from '../comps/OpenText';
import OrderCosts from '../comps/OrderCosts';
import Preptime from '../comps/OrderInfoPrep';
import NoteSection from '../comps/NoteSection';
// import Toggle from '../comps/Toggle';
import QtyItem from '../comps/QtyItem';


//divs 
const OrderCont = styled.View`
    display:flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const OrderContLeft = styled.View`
`;

const OrderContCenter = styled.View`
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex:2;

/* border-radius: 15px 0 0 15px; */
`;

const CenterItemCont = styled.View`
  height: 100%;
  background-color: #E2E2E2;
  width: 100%;
  align-items: center;
`;

const OrderContRight = styled.View`
    display:flex;
    flex-direction: row;
    flex:6;
    justify-content: center;

    /* border-radius: 15px 0 0 15px; */
`;



//center items

const Header = styled.Text`
font-size: 30px;
font-weight: 600;
`;

const HeaderBox = styled.View`
justify-content: left;
`;


const OrderItemsCont = styled.View`
height: 30%;
justify-content: space-around;
`;

//right items

const RightItemCont = styled.View`
  display: flex;
  width: 100%;
  align-content: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 5%;
`;

const Firstitem = styled.View`
  display: flex;
  flex-direction: row;
  height: 15%;
  justify-content: space-between;
  align-items: center;


`;

const Firstitemcont = styled.View`
flex-direction: row;
`;

const RightItem2 = styled.View`
padding: 2%;
`;

const HeaderCont = styled.View`

margin-left: 2%;

`;

const NavIcon = styled.ImageBackground`
    height: 91px;
    width: 91px;

`;

const TopBottomCont = styled.View`
    flex: 1;
`;

const TopItems = styled.View`
  justify-content: space-around;
 
`;

const MiddleItems = styled.View`
  flex-direction: row;
`;

const BottomItems = styled.View`
  flex-direction:row;
  justify-content: space-between;

`;

const BottomRightItems = styled.View`
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
`;





export default function Orderpage({navigation}, {
  image1 = require('../assets/profile1.jpg'),
  Name = "Seong Gi Hun",
  Ordernumber = "Order 456"

}) {
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
              
              <OrderCont>

              <OrderContLeft>
                <NavBar
                  homeOnPress={() => navigation.navigate('Dashboard')}
                  ordersOnPress={() => navigation.navigate('OrdersPage3')}
                  seatconfigOnPress={() => navigation.navigate('EditSeatConfig')}
                  menuconfigOnPress={() => navigation.navigate('Menu1')}
                />
              </OrderContLeft>

                <OrderContCenter>
                  <CenterItemCont>

                    <Header>Orders</Header>

                      {/* <Toggle/> */}
                    <OrderItemsCont>
                      <OrderNumberCard/>
                      <OrderNumberCard/>
                    </OrderItemsCont>
           
                      

                 </CenterItemCont>
                </OrderContCenter>

                <OrderContRight>

                  <RightItemCont>
                  <TopItems>
                      <Firstitem>
                        <Firstitemcont>
                        <RightItem2>
                          <NavIcon source={image1} resizeMode="cover" borderRadius="25px">
                          </NavIcon>
                        </RightItem2>
                        <RightItem2>
                          
                              <Header>{Name}</Header>
                              <Header>{Ordernumber}</Header>
                  
                        </RightItem2>
                        </Firstitemcont>
                          <RightItem2>
                          <Button></Button>
                          </RightItem2>
                    </Firstitem>
                  
                    <Firstitem>
                      <HeaderCont>
                      <OpenText></OpenText>
                      </HeaderCont>
                    </Firstitem>

                    <MiddleItems>
                        <Preptime></Preptime>
                        <Preptime></Preptime>
                    </MiddleItems>

                    <Firstitem>
                    <QtyItem/>
                    </Firstitem>
               </TopItems>

                  <BottomItems>
                    <NoteSection></NoteSection>

                    <BottomRightItems>
                      <OrderCosts></OrderCosts>
                      <Button></Button>
                    </BottomRightItems>

                  </BottomItems>


                


                  </RightItemCont>



                </OrderContRight>

              </OrderCont>
        </SafeAreaView>
      )
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff'
      }
    });