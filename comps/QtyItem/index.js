import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
    width: 621px;
    height: 56px;
    background: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 3px 3px rgba(95, 95, 95, 0.5);    
    align-items: center;
    flex-direction: row;
`;

const Left = styled.View`
    flex:1;
    align-items: flex-start;
    flex-direction: row;
`

const Qty = styled.Text`
    font-family: Poppins;
    font-Size: 16px;
    font-Weight: bold;
    margin-Left: 15px;
`

const Item = styled.Text`
    font-Family: Poppins;
    font-Size: 16px;
    margin-Left: 20px;
`

const Right = styled.View`
    flex: 1;
    align-Items: flex-end;
`

const Cost = styled.Text`
    font-Family: Poppins;
    font-Size: 16px;
    font-Weight: bold;
    margin-Right: 15px;
`

const QtyItem = ({
    number = "Qty: 1",
   item = "Martini a la Raviolo",
   cost = "$5.00"
}) => {
    return (
    <Cont>
        <Left>
        <Qty>{number}</Qty>
        <Item>{item}</Item>
        </Left>
        <Right>
        <Cost>{cost}</Cost>
        </Right>
    </Cont>
    );
}

export default QtyItem;