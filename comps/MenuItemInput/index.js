import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Cont = styled.View`
    
`;

const Title = styled.Text`
    color: #666666;
    font-Size: 18px;
    margin-Left: 15px;
`

const InputTextBox = styled.View`
    width: 417px;
    height: 57px;
    background: #FFFFFF;
    border-Radius: 10px;
    border: black;
    border-Style: solid;
    justify-content: center;
`

const Input = styled.TextInput`
    margin-Left: 15px;
    font-Size: 18px;
    
`

const MeunItem = ({
    title = "Name",
}) => {
    return (
    <Cont>
        <Title>{title}</Title>
        <InputTextBox>
            <Input></Input>
        </InputTextBox>
    </Cont>
    );
}

export default MeunItem;