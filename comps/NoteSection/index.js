import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Cont = styled.View`
    width: 409px;
    height: 291px;
    

`;

const Topbar = styled.View`
    width: 409px;
    height: 68px;
    background-color: #878787 ;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    justify-content: center;
    padding-left: 5%;

`

const Bottombar = styled.View`
    width: 409px;
    height: 233px;
    background-color: #EEEEEE;
    padding-left: 5%;
    padding-top: 5%;

`

const Noteheader = styled.Text`
    font-size: 24px;
    color: #fff;
    
`;

const Notecontent = styled.Text`
    font-size: 18px;
    
`;


const NoteSection = ({
   text = "Would you like to be gganbu's?",
}) => {
    return (
    <Cont>
        <Topbar>
            <Noteheader>Note Section</Noteheader>
        </Topbar>
        <Bottombar>
            <Notecontent>{text}</Notecontent>
        </Bottombar>

    </Cont>
    );
}

export default NoteSection;