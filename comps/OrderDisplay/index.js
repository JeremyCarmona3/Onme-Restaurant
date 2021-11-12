import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
    width: 832px;
    height: 86px;
    background: #FE4370;
    border-Radius: 10px;
    align-Items: center;
    flex-direction: row;
`;

const Left = styled.View`
    flex:1;
    align-Items: flex-start;
`

const Order = styled.Text`
    margin-Left: 15px;
    font-Size: 24px;
    color: white;
    font-Family: Poppins;
`

const Time = styled.Text`
    margin-Left: 15px;
    color: white;
    font-Family: Poppins;
    font-Size: 11px;
`

const Right = styled.View`
    flex: 1;
    align-Items: flex-end;
`

const Button = styled.Text`
    margin-Right: 15px;
    color: white;
    font-Family: Poppins;
    font-Size: 24px;
`

const OrderDisplay = ({
    order = "Order #456",
   time = "2 October 2021, 9:00pm",
   button = "tap to view"
}) => {
    return (
    <Cont>
        <Left>
            <Order>{order}</Order>
            <Time>{time}</Time>
        </Left>
        <Right>
            <Button>{button}</Button>
        </Right>
    </Cont>
    );
}

export default OrderDisplay;