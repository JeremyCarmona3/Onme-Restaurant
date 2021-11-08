import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.TouchableOpacity`
    width:204px;
    height:269px;
    background-color: white;
    border-radius: 15px;

`;

const MenuImage = styled.ImageBackground`
    height:70%;
    width: 100%;    
`;

const ItemName = styled.Text`
    font-size: 18px;
    color: black;
    margin-left: 5%;
    align-self: flex-start;
`;

const ItemPrice = styled.Text`
    font-size: 18px;
    color: #484848;
    margin-left: 5%;
    align-self: flex-start;
`;

const PopItemIcon = styled.Image`
    height: 10%;
    width:13%;
    align-self: flex-end;
    margin-right: 5%;
`;



const MenuCard = ({
    image = require('../../assets/greenteashooter.png'),
    itemname = "Green Tea Shot",
    itemprice = "$5.00",
    popularitem = require('../../assets/popularitemicon.png'),
}) => {
    return (
        <Cont>
            <MenuImage source={image} ></MenuImage>
            <ItemName>{itemname}</ItemName>
            <ItemPrice>{itemprice}</ItemPrice>
            <PopItemIcon source={popularitem}></PopItemIcon>
        </Cont>
    );
} 

export default MenuCard;