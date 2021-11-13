import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Cont = styled.View`
    width:261px;
    height:344px;
    background-color: white;
    border-radius: 15px;
    margin-right: 2%;
    justify-content: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`;

const PlusIcon = styled.ImageBackground`
    height:40%;
    width: 40%;
    margin-left: 30%;
    margin-top: 20%;
    margin-bottom: -25%;
    align-self: center;    
    justify-content: center;
`;

const AddItemText = styled.Text`
    font-size: 24px;
    color: #484848;
    align-self: center;
    justify-content: center;
    margin-top: 20%;
`;

const AddItemCard = ({
    image = require('../../assets/plussign.png'),
}) => {
    return (
    <Cont>
        <PlusIcon source={image}></PlusIcon>
        <AddItemText>Add item</AddItemText>
    </Cont>
    );
}

export default AddItemCard;