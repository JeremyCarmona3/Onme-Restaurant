import React from 'react';
import { Button, Image } from 'react-native';
import styled from 'styled-components/native';

const Cont = styled.TouchableOpacity`
    width:255px;
    height:69px;
    background-color: ${props=>props.buttoncolor};
    border-radius: 50px;
    align-items:center;
    justify-content: center;
    margin-right: ${props=>props.btn_mar}px;
`;

const ButtonText = styled.Text`
    color: ${props=>props.textcolor};
    font-size: 24px;
    font-weight: ${props=>props.textweight};
`;

const Buttons = ({
    buttonwidth = 211,
    buttonheight=  42,
    buttontext ="Edit Menu",
    buttoncolor = "#737373",
    btn_mar = 20,
    textcolor = "white",
    textweight = "500",
    src= require('../../assets/popularitemicon.png'),
}) => {
    return (
        <Cont buttoncolor={buttoncolor} buttonwidth={buttonwidth} buttonheight={buttonheight} btn_mar={btn_mar}>
            <ButtonText textcolor={textcolor} textweight={textweight}>{buttontext}</ButtonText>
        </Cont>
    );

}

export default Buttons;