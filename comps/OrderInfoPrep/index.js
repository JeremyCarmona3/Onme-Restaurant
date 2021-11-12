import React from 'react';
import styled from 'styled-components/native';
import Orderpage from '../../pages/orderspage';

const Prepcont = styled.View`  
    display: flex;
    flex-direction: column;
    width: 211px;
    height: 81px;
    background-color: red;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

const Prephead = styled.Text`
    color: #666666;
    font-size: 12px;
    padding: 5px;
`;

const Prepbody = styled.Text`
    color: #000000;
    font-size: 12px;
`;


const Preptime = ({
    Orderpagehead = "Preparing Time",
    Orderpagebody = "00h:03m:30s",

}) => {
    return (
        <Prepcont>
            <Prephead>{Orderpagehead}</Prephead>
            <Prepbody>{Orderpagebody}</Prepbody>
        </Prepcont>
    )
};

export default Preptime;