import React from 'react';
import styled from 'styled-components/native';

const NavCont = styled.View`
    display: flex;
    height: 100%;
    width: 115px;
    background-color: #737373;
    
`;

const HomeIcon = styled.TouchableOpacity`
    height: 16.6666%;
    justify-content: center;
    align-items: center;
    `;

const OrdersIcon = styled.TouchableOpacity`
    height: 16.6666%;
    justify-content: center;
    align-items: center;
    `;

const SeatConfigIcon = styled.TouchableOpacity`
    height: 16.6666%;
    justify-content: center;
    align-items: center;
    `;

const MenuConfigIcon = styled.TouchableOpacity`
    height: 16.6666%;
    justify-content: center;
    align-items: center;
`;

const SettingsIcon = styled.TouchableOpacity`
    height: 16.6666%;
    justify-content: center;
    align-items: center;
    `;

const Logo = styled.View`
    height: 16.6666%;
    justify-content: center;
    align-items: center;
`;

const NavIcon = styled.ImageBackground`
    height: 50px;
    width: 50px;
    
`;


const NavBar = ({
    image1 = require('../../assets/nav1.png'),
    image2 = require('../../assets/nav2_orderhistory.png'),
    image3 = require('../../assets/nav3_seating.png'),
    image4 = require('../../assets/nav4_menu.png'),
    image5 = require('../../assets/nav5_setting.png'),
    image6 = require('../../assets/nav_logo.png'),
    homeOnPress = ()=>{},
    ordersOnPress = ()=>{}, 
    seatconfigOnPress = ()=>{}, 
    menuconfigOnPress = ()=>{}, 
    settingsOnPress = ()=>{}, 

    orderPgOneOnPress = ()=>{},  
    orderPgTwoPress = ()=>{},  
    orderPgThreeOneOnPress = ()=>{},  
    orderPgFourOnPress = ()=>{},  
    orderPgFiveOnPress = ()=>{},  

}) => {
    return (
        <NavCont>
           <HomeIcon onPress={homeOnPress} >
            <NavIcon source={image1} resizeMode="cover" borderRadius="25px" />
           </HomeIcon>

           <OrdersIcon onPress={ordersOnPress}>
           <NavIcon source={image2} resizeMode="cover" borderRadius="25px" />
           </OrdersIcon>

           <SeatConfigIcon onPress={seatconfigOnPress}>
           <NavIcon source={image3} resizeMode="cover" borderRadius="25px" />
           </SeatConfigIcon>

           <MenuConfigIcon onPress={menuconfigOnPress}>
           <NavIcon source={image4} resizeMode="cover" borderRadius="25px" />
           </MenuConfigIcon>

           <SettingsIcon>
           <NavIcon source={image5} resizeMode="cover" borderRadius="25px" />
           </SettingsIcon>

           <Logo>
           <NavIcon source={image6} resizeMode="cover" borderRadius="25px" />
           </Logo>
        </NavCont>
    )
};

export default NavBar;
