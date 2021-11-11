import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';



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
            orderSize={newOrderSize}
            orderWeight={newOrderWeight}
            orderColor={newOrderColor}
        >
           <newOrderText>{newOrderText}</newOrderText>
           <Line>{line}</Line>
        </NewOrder>
    );
}

export default NewOrder;