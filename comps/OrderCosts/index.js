import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.View`
    width: 225px;
    height: 108px;
    justify-content: space-between;
    flex-direction: row;
`;

const SubTotal = styled.Text`
    color: #5B5B5B;
    font-weight: bold;
`;

const Tax = styled.Text`
    color: #5B5B5B;
    font-weight: bold;
`;

const Tip = styled.Text`
    color: #5B5B5B;
    font-weight: bold;
`;

const Total = styled.Text`
    font-weight: bold;
`;

const LeftCol = styled.View`
`;

const RightCol = styled.View`
`;

const Costs= styled.Text`
    color: #5B5B5B;
    font-weight: bold;
`;

const Costs2 = styled.Text`
    font-weight: bold;
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
