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



//divs 
const OrderCont = styled.View`
display:flex;
flex-direction: row;
background-color: #fad;
width: 100%;
`;

const OrderContLeft = styled.View`
background-color: green;




/* border-radius: 15px 0 0 15px; */
`;

const OrderContCenter = styled.View`
justify-content: flex-start;
align-items: center;
flex-direction: column;
background-color: red;
flex:2;


/* border-radius: 15px 0 0 15px; */
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

//right items

const RightItemCont = styled.View`
  display: flex;
  width: 100%;
  background-color: grey;
  align-content: center;
  flex-direction: column;
  padding: 5%;
`;

const Firstitem = styled.View`
  display: flex;
  flex-direction: row;
  height: 13%;
  width: 100%;
  background-color: blue;
  justify-content: space-between;

`;

const Firstitemcont = styled.View`
flex-direction: row;
`;

const RightItem2 = styled.View`
padding: 2%;
`;

const NavIcon = styled.ImageBackground`
    height: 91px;
    width: 91px;

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



export default function Orderpage({
  image1 = require('../assets/nav1.png'),
  Name = "Seong Gi Hun",
  Ordernumber = "Order 456"

}) {
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
              
              <OrderCont>
              
              <OrderContLeft>
                <NavBar/>
              </OrderContLeft>

                <OrderContCenter>
                    <Header>Orders</Header>


                      <OrderNumberCard/>
                      <OrderNumberCard/>
                </OrderContCenter>

                <OrderContRight>
                  <RightItemCont>
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
                      <OpenText></OpenText>
                    </Firstitem>

                    <Firstitem>
                        <Preptime></Preptime>
                        <Preptime></Preptime>
                    </Firstitem>

                    <Firstitem>
                    <Text>Qty:1 Martini a la Ravioli</Text>
                    </Firstitem>
                    
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