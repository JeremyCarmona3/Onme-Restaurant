import React from 'react';
import styled from 'styled-components/native';

const ToggleContainer = styled.View`
    width:245px;
    height:60px;
    background-color: #FFFFFF;
    border-radius: 10px;

    flex-direction: row;
    justify-content: space-between;
`;

const ToggleButton = styled.TouchableOpacity`
    width: 120px;
    height: 60px;
    background-color: #C4C4C4; 
    border-radius: 10px;
`;

const ToggleLeftText = styled.TouchableOpacity`
    width: 120px;
    height: 60px;

    color: black;
    background-color: #C4C4C4;
    border-radius: 10px; 
    font-size:18px;

    justify-content: center;
    align-items: center;
`;

const ToggleRightText = styled.TouchableOpacity`
    width: 120px;
    height: 60px;

    color: black;
    background-color: #C4C4C4; 
    border-radius: 10px;
    font-size:18px;

    justify-content: center;
    align-items: center;
 
`;

const Toggle = ({
    backgroundColor = "#C4C4C4",
}) => {
    return (
        <ToggleContainer>
            <ToggleLeftText changeBackgroundColor={backgroundColor}>New</ToggleLeftText>
            <ToggleRightText changeBackgroundColor={backgroundColor}>Preparing</ToggleRightText>
        </ToggleContainer>
    );

}

export default Toggle;