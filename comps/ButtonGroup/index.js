import React from 'react';
import styled from 'styled-components/native';


const Cont = styled.View`
    width:710px;
    height:55px;
    background-color: white;
    flex-direction: row;
    border-radius: 10px;
    
    border: 1px #C4C4C4;
`;

const StatusSelection = styled.TouchableOpacity`
    width: 237px;
    height: 55px;
    background-color: ${props => props.changeButtonColor};
    border-radius: 10px;
    align-items: center;
`;

const SelectionText = styled.Text`
    margin-top: 5%;
    font-size: 18px; 
    font-weight: medium;
    align-items: center;
    justify-content: center;

`;

const ButtonGroup = ({
    buttonGroupOnPress = "#C4C4C4",
    buttonGroupText = "Available",
    onClick,
    
}) => {
    return (
        <Cont>
            <StatusSelection changeButtonColor={buttonGroupOnPress} onClick={onClick}>
                <SelectionText>{buttonGroupText}</SelectionText>
            </StatusSelection>

            <StatusSelection changeButtonColor={buttonGroupOnPress} onClick={onClick}> 
                <SelectionText>{buttonGroupText}</SelectionText>
            </StatusSelection>
            
            <StatusSelection changeButtonColor={buttonGroupOnPress} onClick={onClick}>
                <SelectionText>{buttonGroupText}</SelectionText>
            </StatusSelection>
        </Cont>
    );

}


export default ButtonGroup;