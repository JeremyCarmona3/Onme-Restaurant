import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const Cont = styled.TouchableOpacity`
    width:476px;
    height:217px;
    background-color: white;
    border-radius: 10px;
    justify-content: center;
    padding: 5%;
    flex-direction: column;
    box-shadow: 10px 5px 5px grey;
    
`;

const TotalNumberCus = styled.Text`
    color: #8A8A8A;
    font-family: "PoppinsSemiBold";
    font-size: 24px;
    margin-bottom: 5%;
`;

const Number = styled.Text`
    font-family: "PoppinsSemiBold";
    font-size: 72px;
`;

const Bar = styled.View`
    width:200px;
    height:6px;
    background-color:#FE4370 ;
    margin-top: 5%;
`;


const OrderStatsCard = ({
    totnumcus = "TOTAL CUSTOMERS SERVED",
    num = "15",
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
            <TotalNumberCus>{totnumcus}</TotalNumberCus>
            <Number>{num}</Number>
            <Bar/>
        </Cont>
    );
}

export default OrderStatsCard;