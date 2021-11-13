import React from 'react';
import styled from 'styled-components/native';


const Cont = styled.View`
    width:710px;
    height:55px;
<<<<<<< HEAD
    
    flex-direction: row;
    border-radius: 10px;
    
    border: 1px lightgrey;
    
=======
    background-color: white;
    flex-direction: row;
    border-radius: 10px;
    
    border: 1px #C4C4C4;
>>>>>>> 11707b8b425b9c042a11bc90c3fa82cb37a88e53
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
    margin-top: 5%;
    font-size: 18px; 
    font-weight: medium;
    align-items: center;
    justify-content: center;
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