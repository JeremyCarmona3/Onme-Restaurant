import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
    font-size: ${props => props.newOrderSize};
    font-weight: ${props => props.newOrderWeight};
    color: ${props => props.newOrderColor};    
`;

const Line = styled.View`
    border-width: "1px";
    border-color: "#DADADA";
    width: "1060px";
    height: "3604px";
`;

const NewOrder = ({
   newOrderText = "New Orders",
   newOrderSize = "24px",
   newOrderWeight = "400",
   newOrderColor = "black",
   line = ""
}) => {
    return (
        <NewOrder 
            newOrderSize
            newOrderWeight
            newOrderColor
        >
           <newOrderText>{newOrderText}</newOrderText>
           <Line>{line}</Line>
        </NewOrder>
    );
}

export default NewOrder;