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

const ToggleLeftText = styled.View`
    width: 120px;
    height: 60px;

    color: black;
    font-size:18px;

    justify-content: center;
    align-items: center;
`;

const ToggleRightText = styled.View`
    width: 120px;
    height: 60px;

    color: black;
    font-size:18px;

    justify-content: center;
    align-items: center;
 
`;

const Toggle = ({

}) => {
    return (
        <ToggleContainer>
            <ToggleLeftText>New</ToggleLeftText>
            <ToggleRightText>Preparing</ToggleRightText>
        </ToggleContainer>
    );

}

export default Toggle;