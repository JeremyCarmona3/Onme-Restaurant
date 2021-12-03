import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

const Cont = styled.View``;

const Opentxt = styled.Text`
    font-size: 36px;
    font-weight: bold;
    font-family: "PoppinsSemiBold";
`;

const Closetxt = styled.Text`
    font-size: 30px;    
    font-family: "PoppinsRegular";
`;

const OpenText = ({
    heading="Open",
    subheading ="Close at 12am"
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
            <Opentxt>{heading}</Opentxt>
            <Closetxt>{subheading}</Closetxt>
        </Cont>
    );
}


export default OpenText;
