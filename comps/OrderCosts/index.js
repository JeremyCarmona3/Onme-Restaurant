import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const Cont = styled.View`
    width: 351px;
    height: 192px;
    justify-content: space-between;
    flex-direction: row;
`;

const SubTotal = styled.Text`
    color: #5B5B5B;
    font-size: 24px;
    font-family: "PoppinsMedium";
`;

const Tax = styled.Text`
    color: #5B5B5B;
    font-size: 24px;
    font-family: "PoppinsMedium";
`;

const Tip = styled.Text`
    color: #5B5B5B;
    font-size: 24px;
    font-family: "PoppinsMedium";
`;

const Total = styled.Text`
    font-size: 24px;
    font-family: "PoppinsBold";
`;

const LeftCol = styled.View`
    justify-content: space-between;
`;

const RightCol = styled.View`
    justify-content: space-between;
`;

const Costs= styled.Text`
    color: #5B5B5B;
    font-size: 24px;
    font-family: "PoppinsMedium";
`;

const Costs2 = styled.Text`
    font-size: 24px;
    font-family: "PoppinsBold";
`;

const OrderCosts = ({
    subtotprice = "$5.00",
    taxprice = "$0.60",
    tipprice = "$1.60",
    totalprice = "$7.20",

}) => {
    const [loaded] = useFonts({
        PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
        PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
        PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
        PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
        PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf')
      });
    
      if (!loaded) {
        return null;
      }
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
