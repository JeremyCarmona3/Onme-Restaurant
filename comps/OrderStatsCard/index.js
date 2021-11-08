import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.TouchableOpacity`
    width:360px;
    height:170px;
    background-color: white;
    border-radius: 10px;
    justify-content: center;
    padding: 5%;
    flex-direction: column;
    
`;

const TotalNumberCus = styled.Text`
    color: #8A8A8A;
    font-weight: bold;
    font-size: 15px;
`;

const Number = styled.Text`
    font-weight: bold;
    font-size: 35px;
`;

const Bar = styled.View`
    width:133px;
    height:6px;
    background-color:#FE4370 ;
`;


const OrderStatsCard = ({
    totnumcus = "TOTAL CUSTOMERS SERVED",
    num = "15",
}) => {
    return (
        <Cont>
            <TotalNumberCus>{totnumcus}</TotalNumberCus>
            <Number>{num}</Number>
            <Bar/>
        </Cont>
    );
}

export default OrderStatsCard;