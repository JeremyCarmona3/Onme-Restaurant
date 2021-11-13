import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Cont = styled.View`
    width:261px;
    height:344px;
    background-color: white;
    border-radius: 15px;
    margin-right: 2%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`;

const MenuImage = styled.ImageBackground`
    height:80%;
    width: 100%;   
    margin-bottom: -10%;
    align-self: center;
    border-radius: 15px; 
`;

const ItemName = styled.Text`
    font-size: 24px;
    color: black;
    margin-left: 5%;
    align-self: flex-start;
`;

const ItemPrice = styled.Text`
    font-size: 24px;
    color: #484848;
    margin-left: 5%;
    align-self: flex-start;
`;

const PopItemIcon = styled.Image`
    width: ${props => props.imgitemwidth};
    height: ${props => props.imgitemheigth};
    align-self: flex-end;
    margin-right: 5%;
    border-radius: 15px;
`;

const MenuCard = ({
    imgitemwidth = "17%",
    imgitemheigth = "13%",
    image = require('../../assets/greenteashooter.png'),
    itemname = "Green Tea Shot",
    itemprice = "$5.00",
    popularitem = require('../../assets/popularitemicon.png'),
}) => {
    return (
        <Cont>
            <MenuImage source={image} imgitemwidth={imgitemwidth} imgitemheigth={imgitemheigth}></MenuImage>
            <ItemName>{itemname}</ItemName>
            <ItemPrice>{itemprice}</ItemPrice>
            <PopItemIcon source={popularitem}></PopItemIcon>
        </Cont>
    );
} 

export default MenuCard;