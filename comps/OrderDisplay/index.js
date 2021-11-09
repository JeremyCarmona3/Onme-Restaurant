import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
    width: 832px;
    height: 86px;
    background: #FE4370;
    borderRadius: 10px;
    alignItems: center;
    flex-direction: row;
`;

const Left = styled.View`
    flex:1;
    alignItems: flex-start;
`

const Order = styled.Text`
    marginLeft: 15px;
    fontSize: 24px;
    color: white;
    fontFamily: Poppins;
`

const Time = styled.Text`
    marginLeft: 15px;
    color: white;
    fontFamily: Poppins;
    fontSize: 11px;
`

const Right = styled.View`
    flex: 1;
    alignItems: flex-end;
`

const Button = styled.Text`
    marginRight: 15px;
    color: white;
    fontFamily: Poppins;
    fontSize: 24px;
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