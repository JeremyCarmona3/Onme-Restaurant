import React from 'react';
import { Button, Image } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const Cont = styled.TouchableOpacity`
    width:${props => props.width};
    height:${props => props.height};
    background-color: ${props => props.bgColor};
    border-radius: 50px;
    align-items:center;
    justify-content: center;
`;

const ButtonText = styled.Text`
 color: white;
 font-size:${props => props.fontSize};
 font-family: 'PoppinsSemiBold';
`;

const Buttons = ({
    buttonwidth = '211px',
    buttonheight=  '42px',
    buttontext ="Edit Menu",
    buttoncolor = "#737373",
    fontsize = "18px",
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
        <Cont bgColor={buttoncolor} width={buttonwidth} height={buttonheight} onPress={onPress}>
            <ButtonText fontSize={fontsize}>{buttontext}</ButtonText>
        </Cont>
    );

}

export default Buttons;