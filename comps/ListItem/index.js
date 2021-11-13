import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const ItemContainer = styled.View`
    width:825px;
    height:70px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 3px 3px #CFCFCF;

    justify-content: space-between;
    flex-direction: row;
    padding: 40px;
`;



const ListItem = ({
    itemQuantity= "Qty:1",
    itemProduct= "Martini a la Ravioli",
    itemPrice= "$5.00",
}) => {
    return (
        <ItemContainer>
            <View>{itemQuantity}</View>
            <View>{itemProduct}</View>
            <View>{itemPrice}</View>
        </ItemContainer>
    );

}

export default ListItem;