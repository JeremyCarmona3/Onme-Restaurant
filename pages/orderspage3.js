import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

//comps import

import NavBar from '../comps/NavBar';
import OrderNumberCard from '../comps/OrderNumberCard';
import Button from '../comps/Button';
import OpenText from '../comps/OpenText';
import OrderCosts from '../comps/OrderCosts';
import Preptime from '../comps/OrderInfoPrep';
import NoteSection from '../comps/NoteSection';
import Toggle from '../comps/Toggle';
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
`;

const CenterItemCont = styled.View`
  height: 100%;
  background-color: #E2E2E2;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TextCont = styled.View`
  height: 100%;
  background-color: #FFF;
  width: 100%;
`;

const OrderContRight = styled.View`
    display:flex;
    flex-direction: row;
    flex:6;
    justify-content: center;
`;

//center items
const Header = styled.Text`
  font-size: 30px;
  font-family: "PoppinsSemiBold";
  margin-bottom: 10px;
`;

const OrderItemsCont = styled.View`
  height: 85%;
  width: 100%;
  align-items: center;
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
  /* margin-left: 2%; */
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
  /* border-width: 1px; */
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
  Name = "SW1 Room 1205",
  Ordernumber = "Order 16",
}) {
  const [toggle, setToggle] = useState(0);

  const NewOrders = () => {
    setToggle(0);
    console.log("New Order");
  }

  const PreparingOrders = () => {
    setToggle(1);
    console.log("Preparing Order");
  }

  const OrderReady = () => {
    setToggle(2);
    console.log("Order Ready");
  }

  const [loaded] = useFonts({
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return null;
  }

  else if (toggle === 0) {
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
                    <Toggle
                      newOnPress={NewOrders}
                      prepareOnPress={PreparingOrders}
                    />
                  <OrderItemsCont>
                    <OrderNumberCard onPress={PreparingOrders} />
                  </OrderItemsCont>
                </CenterItemCont>
              </OrderContCenter>

              <OrderContRight>

                <RightItemCont>
                <TopItems>
                    <Firstitem>
                      <Firstitemcont>
                      <RightItem2>
                        <Header>{Name}</Header>
                        <Header>{Ordernumber}</Header>
                      </RightItem2>
                      </Firstitemcont>
                  </Firstitem>
                
                  <Firstitem>
                    <HeaderCont>
                    <OpenText></OpenText>
                    </HeaderCont>
                  </Firstitem>

                  <MiddleItems>
                      <Preptime />
                      <Preptime 
                        Orderpagehead="Send to"
                        Orderpagebody="Seat 08" />
                  </MiddleItems>

                  <Firstitem>
                    <QtyItem 
                      item='"OnMe" Special'
                      cost="$8.99" />
                  </Firstitem>
              </TopItems>

                <BottomItems>
                  <NoteSection text="If you were a transformer, you'd be Optimus Fine."/>
                  
                  <BottomRightItems>
                    <OrderCosts 
                      subtotprice="$8.99"
                      taxprice="$0.45"
                      tipprice="$1.35"
                      totalprice="$10.34"
                    />
                    <Button 
                      buttoncolor="#94CC81"
                      buttontext="CONFIRM"
                      buttonheight="53px"
                      buttonwidth="100%"
                      onPress={PreparingOrders}
                    />
                  </BottomRightItems>

                </BottomItems>
                </RightItemCont>
              </OrderContRight>

            </OrderCont>
      </SafeAreaView>
    )
  }
  else if (toggle === 1) {
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
                    <Toggle
                    newOnPress={NewOrders}
                    prepareOnPress={PreparingOrders} 
                    newBgColor="#FFF"
                    preparingBgColor="#C4C4C4" />
                  <OrderItemsCont>
                    <OrderNumberCard 
                      onPress={PreparingOrders} 
                      subTitle = "Waiting to be prepared" 
                      hideLine="flex" />
                  </OrderItemsCont>
                </CenterItemCont>
              </OrderContCenter>

              <OrderContRight>

                <RightItemCont>
                <TopItems>
                    <Firstitem>
                      <Firstitemcont>
                      <RightItem2>
                        <Header>{Name}</Header>
                        <Header>{Ordernumber}</Header>
                      </RightItem2>
                      </Firstitemcont>
                  </Firstitem>
                
                  <Firstitem>
                    <HeaderCont>
                    <OpenText></OpenText>
                    </HeaderCont>
                  </Firstitem>

                  <MiddleItems>
                      <Preptime />
                      <Preptime 
                        Orderpagehead="Send to"
                        Orderpagebody="Seat 08" />
                  </MiddleItems>

                  <Firstitem>
                    <QtyItem 
                      item='"OnMe" Special'
                      cost="$8.99" />
                  </Firstitem>
              </TopItems>

                <BottomItems>
                  <NoteSection text="If you were a transformer, you'd be Optimus Fine."/>
                  
                  <BottomRightItems>
                    <OrderCosts 
                      subtotprice="$8.99"
                      taxprice="$0.45"
                      tipprice="$1.35"
                      totalprice="$10.34"
                    />
                    <Button 
                      buttoncolor="#FE4370"
                      buttontext="READY"
                      buttonheight="53px"
                      buttonwidth="100%"
                      onPress={OrderReady}
                    />
                  </BottomRightItems>

                </BottomItems>
                </RightItemCont>
              </OrderContRight>

            </OrderCont>
      </SafeAreaView>
    )
  }
  else if (toggle === 2) {
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
                    <Toggle
                    newOnPress={NewOrders}
                    prepareOnPress={PreparingOrders} 
                    newBgColor="#FFF"
                    preparingBgColor="#C4C4C4" />
                  <OrderItemsCont>
                  </OrderItemsCont>
                </CenterItemCont>
              </OrderContCenter>

              <OrderContRight>
                <TextCont>
                  <Text style={{ fontSize: 30, fontWeight: '700', padding: 80, color: "#C4C4C4", fontFamily: "PoppinsMedium"}}>No Active Orders</Text>
                </TextCont>
              </OrderContRight>

            </OrderCont>
      </SafeAreaView>
    )
  }
  };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff'
      }
    });