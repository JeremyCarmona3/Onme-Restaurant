import React from 'react';
import styled from 'styled-components/native';


const Cont = styled.View`
    width:710px;
    height:55px;
    
    flex-direction: row;
    border-radius: 10px;
    
    border: 1px lightgrey;
    
`;

const StatusSelection = styled.TouchableOpacity`
    width: 237px;
    height: 55px;
    background-color: ${props => props.changeButtonColor};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

const SelectionText = styled.Text`
    font-size: 18px; 
    
   
`;


const ButtonGroup = ({
    buttonGroupOnPress1 = "#C4C4C4",
    buttonGroupOnPress2 = '#FFF',
    buttonText1 = "Available",
    buttonText2 = "Out of Stock",
    buttonText3 = "Private",
    
}) => {
    return (
        <Cont>
            <StatusSelection changeButtonColor={buttonGroupOnPress1}>
                <SelectionText>{buttonText1}</SelectionText>
            </StatusSelection>

            <StatusSelection changeButtonColor={buttonGroupOnPress2}>
                <SelectionText>{buttonText2}</SelectionText>
            </StatusSelection>
            
            <StatusSelection changeButtonColor={buttonGroupOnPress2}>
                <SelectionText>{buttonText3}</SelectionText>
            </StatusSelection>
        </Cont>
    );

}

export default ButtonGroup;