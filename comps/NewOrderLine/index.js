import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const Cont = styled.View`
`;

const Heading = styled.Text`
    font-size: 30px;
    font-family: "PoppinsRegular";
`;

const Line = styled.View`
width: 1000px;
height: 3px;
background-color: #DADADA;
`;

const NewOrderLine =({
    headingtext = 'New Orders',

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
            <Heading>{headingtext}</Heading>
            <Line></Line>
        </Cont>
    );
}

export default NewOrderLine;