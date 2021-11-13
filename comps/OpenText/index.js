import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
    font-size: ${props => props.openTextSize};
    font-weight: ${props => props.openTextWeight};
    color: ${props => props.openTextColor};    
`;

const OpenText = ({
   openText = "Open",
   openTextSize = "30px",
   openTextWeight = "bold",
   openTextColor = "black"
}) => {
    return (
        <OpenText 
          openTextSize={openTextSize}
          openTextWeight={openTextWeight}
          openTextColor={openTextColor}
        >
           {openText}
        </OpenText>
    );
}

export default OpenText;