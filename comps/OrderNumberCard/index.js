import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const Cont = styled.TouchableOpacity`
    width: 80%;
    height:81px;
    background-color: white;
    border-radius: 10px;
    justify-content: flex-start;
    padding: 5%;
    margin-top: 5%;
    flex-direction: row;
`;

const TextCont = styled.View`
    flex-direction: column;
    margin-left: 15px;
`;

const OrderText = styled.Text`
    font-size: 18px;
    color: black;
    font-family: "PoppinsRegular";
`;

const WaitingText = styled.Text`
    font-size: 10px;
    color: #9C9C9C;
    font-family: "PoppinsRegular";
`;

const Line = styled.View`
    width: 5px;
    height: 50px;
    background-color: #FE4370;
    border-radius: 10px;
    display: ${props => props.hideLine};
`;


const OrderNumberCard = ({
    ordernum = "Order #16",
    subTitle = "Waiting to be accepted",
    hideLine="none",
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
            <Line hideLine={hideLine} />
            <TextCont>
                <OrderText>{ordernum}</OrderText>
                <WaitingText>{subTitle}</WaitingText>
            </TextCont>
        </Cont>
    );
}

export default OrderNumberCard;