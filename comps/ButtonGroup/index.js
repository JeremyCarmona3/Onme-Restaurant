import React from 'react';
import styled from 'styled-components/native';


const Cont = styled.View`
    width:710px;
    height:55px;
    background-color: red;
    flex-direction: row;
    border-radius: 10px;
`;

const StatusSelection = styled.TouchableOpacity`
    width: 237px;
    height: 55px;
    background-color: ${props => props.changeButtonColor};
    border-radius: 10px;
`;

const SelectionText = styled.Text`
    margin-top: 5%;
    margin-left: 25%;
    font-size: 18px; 
    align-items: center;
    justify-content: center;
`;


const ButtonGroup = ({
    buttonGroupOnPress = "#C4C4C4",
    buttonText = "Available",
    
}) => {
    return (
        <Cont>
            <StatusSelection changeButtonColor={buttonGroupOnPress}>
                <SelectionText>{buttonText}</SelectionText>
            </StatusSelection>

            <StatusSelection changeButtonColor={buttonGroupOnPress}>
                <SelectionText buttonText={"Out of Stock"}></SelectionText>
            </StatusSelection>
            
            <StatusSelection changeButtonColor={buttonGroupOnPress}>
                <SelectionText>{buttonText}</SelectionText>
            </StatusSelection>
        </Cont>
    );

}

export default ButtonGroup;