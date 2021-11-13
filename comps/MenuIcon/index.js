import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Cont = styled.View`
`;

const MenuIcon = styled.ImageBackground`
    width: ${props=>props.iconwidth};
    height: ${props=>props.iconheight};
`;

const Icons = ({
    iconwidth = "59px",
    iconheight = "59px",
    iconimage = require('../../assets/helpicon.png'),
}) =>{
    return (
        <Cont>
            <MenuIcon source={iconimage} iconwidth={iconwidth} iconheight={iconheight} ></MenuIcon>
        </Cont>
    );

}

export default Icons;