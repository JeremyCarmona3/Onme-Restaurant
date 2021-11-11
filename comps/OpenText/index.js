import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
   display :flex ;
`;


const OpenText = ({
   openText = "Open",
   openTextSize = "30px",
   openTextWeight = "bold",
   openTextColor = "black"
}) => {
    return (

        <Cont>
        <OpenText 
        //   openTextSize={openTextSize}
        //   openTextWeight={openTextWeight}
        //   openTextColor={openTextColor}
        >
           {openText}
        </OpenText>
        </Cont>
    );
}

export default OpenText;