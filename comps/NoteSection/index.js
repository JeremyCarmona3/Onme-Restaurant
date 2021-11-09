import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
    width: 321px;
    height: 188px;
    background-color: white;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
`;

const Topbar = styled.View`
    width: 321px;
    height: 41px;
    backgroundColor: #878787;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    justifyContent: center;
`


const Title = styled.Text`
    color: white;
    font-family: Poppins;
    fontSize: 16px;
    marginLeft: 10px;
`;

const Textbox = styled.Text`
    font-family: Poppins;
    fontSize: 16px;
    marginLeft: 10px;
    marginTop: 10px;
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