import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const Cont = styled.TouchableOpacity`
    width: 1000px;
    height: 86px;
    background-color: #FE4370;
    border-radius: 10px;
    padding:18px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

const OrderNum = styled.Text`
    color: white;
    font-size: 25px;
    font-family: "PoppinsSemiBold";
`;

const Date = styled.Text`
    color: white;
    font-family: "PoppinsRegular";
`;

const OrderDateCont = styled.View`
    justify-content:space-between;
`;

const TapToViewCont= styled.View`
    flex-direction: row;
`;

const TapText =styled.Text`
    color: white;
    font-size: 25px;
    justify-content: center;
    margin-top: 8px;
    font-family: "PoppinsRegular";
`;

const PinkOrderBar = ({
    ordernumber= "Order #16",
    date= "2 October 2021, 9:00pm",
    onPress = () => {}
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
        <Cont onPress={onPress}>
            <OrderDateCont>
            <OrderNum>{ordernumber}</OrderNum>
            <Date>{date}</Date>
            </OrderDateCont>

            <TapToViewCont>
               <TapText>tap to view</TapText>
            </TapToViewCont>
           
        </Cont>
    );
}

export default PinkOrderBar;