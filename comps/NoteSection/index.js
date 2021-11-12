import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
    width: 321px;
    height: 188px;
    background-color: white;
    border-Top-Left-Radius: 20px;
    border-Top-Right-Radius: 20px;
`;

const Topbar = styled.View`
    width: 321px;
    height: 41px;
    background-Color: #878787;
    border-Top-Left-Radius: 20px;
    border-Top-Right-Radius: 20px;
    justify-Content: center;
`


const Title = styled.Text`
    color: white;
    font-family: Poppins;
    font-Size: 16px;
    margin-Left: 10px;
`;

const Textbox = styled.Text`
    font-family: Poppins;
    font-Size: 16px;
    margin-Left: 10px;
    margin-Top: 10px;
`

const NoteSection = ({
   text = "Would you like to be gganbu's?",
}) => {
    return (
    <Cont>
        <Topbar>
        <Title>NoteSection</Title>
        </Topbar>
        <Textbox>{text}</Textbox>
    </Cont>
    );
}

export default NoteSection;