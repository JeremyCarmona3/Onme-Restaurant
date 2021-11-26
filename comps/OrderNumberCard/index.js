import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.TouchableOpacity`
    width:219px;
    height:81px;
    background-color: white;
    border-radius: 10px;
    justify-content: center;
    padding: 5%;

`;

const OrderText = styled.Text`
    font-size: 18px;
    color: black;
`;

const WaitingText = styled.Text`
    font-size: 10px;
    color: #9C9C9C;
`;

const OrderNumberCard = ({
    ordernum = "Order #456",
}) => {
    return (
        <Cont>
            <OrderText>{ordernum}</OrderText>
            <WaitingText>Waiting to be accepted</WaitingText>
        </Cont>
    );
}

export default OrderNumberCard;