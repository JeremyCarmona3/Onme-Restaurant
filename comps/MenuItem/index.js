import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Cont = styled.View`
    
`;

const Title = styled.Text`
    color: #666666;
    fontSize: 18px;
    marginLeft: 15px;
`

const InputTextBox = styled.View`
    width: 417px;
    height: 57px;
    background: #FFFFFF;
    borderRadius: 10px;
    border: black;
    borderStyle: solid;
    justify-content: center;
`

const Input = styled.TextInput`
    marginLeft: 15px;
    fontSize: 18px;
    
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