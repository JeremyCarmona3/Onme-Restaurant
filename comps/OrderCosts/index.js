import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.View`
    width: 351px;
    height: 192px;
    justify-content: space-between;
    flex-direction: row;
`;

const SubTotal = styled.Text`
    color: #5B5B5B;
    font-weight: bold;
    font-size: 24px;
    
`;

const Tax = styled.Text`
    color: #5B5B5B;
    font-weight: bold;
    font-size: 24px;

`;

const Tip = styled.Text`
    color: #5B5B5B;
    font-weight: bold;
    font-size: 24px;

`;

const Total = styled.Text`
    font-weight: bold;
    font-size: 24px;
    
`;

const LeftCol = styled.View`
`;

const RightCol = styled.View`
`;

const Costs= styled.Text`
    color: #5B5B5B;
    font-weight: bold;
    font-size: 24px;

`;

const Costs2 = styled.Text`
    font-weight: bold;
    font-size: 24px;

`;

const OrderCosts = ({
    subtotprice = "$5.00",
    taxprice = "$0.60",
    tipprice = "$1.60",
    totalprice = "$7.20",

}) => {
    return (
        <Cont>
            <LeftCol>
             <SubTotal>Subtotal</SubTotal>
             <Tax>Tax</Tax>
             <Tip>Tip</Tip>
             <Total>Total</Total>
           </LeftCol>

           <RightCol>
            <Costs>{subtotprice}</Costs>
            <Costs>{taxprice}</Costs>
            <Costs>{tipprice}</Costs>
            <Costs2>{totalprice}</Costs2>
           </RightCol>
        </Cont>
    )
}

export default OrderCosts;
