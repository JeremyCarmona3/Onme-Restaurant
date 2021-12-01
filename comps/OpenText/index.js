import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
// import { useFonts } from 'expo-font';

const Cont = styled.View``;

const Opentxt = styled.Text`
    font-size: 30px;
    font-weight: bold;
    /* font-family: "poppins"; */
`;

const Closetxt = styled.Text`
    font-size: 24px;    
    /* font-family: "poppins"; */
`;

const OpenText = ({
    heading="Open",
    subheading ="Close at 12am"
}) => {
    return (
        <Cont>
            <Opentxt>{heading}</Opentxt>
            <Closetxt>{subheading}</Closetxt>
        </Cont>
    );
}


export default OpenText;
