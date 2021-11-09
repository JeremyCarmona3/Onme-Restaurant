import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
    width: 621px;
    height: 56px;
    background: #FFFFFF;

    shadowColor: #5F5F5F;
    shadowOffset: {width: 3, height: 3};
    shadowOpacity: 0.5;

    borderRadius: 20px;
    alignItems: center;
    flex-direction: row;
`;

const Left = styled.View`
    flex:1;
    alignItems: flex-start;
    flex-direction: row;
`

const Qty = styled.Text`
    fontFamily: Poppins;
    fontSize: 16px;
    fontWeight: bold;
    marginLeft: 15px;
`

const Item = styled.Text`
    fontFamily: Poppins;
    fontSize: 16px;
    marginLeft: 20px;
`

const Right = styled.View`
    flex: 1;
    alignItems: flex-end;
`

const Cost = styled.Text`
    fontFamily: Poppins;
    fontSize: 16px;
    fontWeight: bold;
    marginRight: 15px;
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