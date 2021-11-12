import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Cont = styled.View` 
`;

const Title = styled.Text`
    color: black;
    font-size: 18px;
    margin-left: 15px;
`;

const InputTextBox = styled.View`
    width: ${props => props.inputWidth};
    height:${props => props.inputHeight};
    background: #FFFFFF;
    border-radius: 10px;
    border: grey;
    border-style: solid;
    justify-content: center;
`;

const Input = styled.TextInput`
    margin-left: 15px;
    font-size: 18px;
    
`;

const MeunItem = ({
    title = "Name",
    width = '417px',
    height = '57px',
}) => {
    return (
    <Cont>
        <Title>{title}</Title>
        <InputTextBox inputWidth={width} inputHeight={height}>
            <Input></Input>
        </InputTextBox>
    </Cont>
    );
}

export default MeunItem;