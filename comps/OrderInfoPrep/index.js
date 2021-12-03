import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const Prepcont = styled.View`  
    width: 211px;
    height: 60px;
    justify-content: space-evenly;
    padding-left: 3%;
`;

const Prephead = styled.Text`
    color: #666666;
    font-size: 12px;
    font-family: "PoppinsRegular";
`;

const Prepbody = styled.Text`
    color: #000000;
    font-size: 12px;
    font-family: "PoppinsRegular";
`;

const Line = styled.View`
    width: 3px;
    height: 60px;
    background-color: #DADADA;
`;


const Preptime = ({
    Orderpagehead = "Preparing Time",
    Orderpagebody = "00h:01m:30s",

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
    return (<>
        <Line />
        <Prepcont>
            <Prephead>{Orderpagehead}</Prephead>
            <Prepbody>{Orderpagebody}</Prepbody>
        </Prepcont>
        </>
    )
};

export default Preptime;