import React from 'react';
import styled from 'styled-components/native';


const Cont = styled.View`
    width:710px;
    height:55px;
<<<<<<< HEAD
    background-color: white;
    flex-direction: row;
    border-radius: 10px;
    
    border: 1px #C4C4C4;
=======
    
    flex-direction: row;
    border-radius: 10px;
    
    border: 1px lightgrey;
    
>>>>>>> ea73c5a429f0db78484863256ad43bc17e901e92
`;

const StatusSelection = styled.TouchableOpacity`
    width: 237px;
    height: 55px;
    background-color: ${props => props.changeButtonColor};
    border-radius: 10px;
    align-items: center;
<<<<<<< HEAD
`;

const SelectionText = styled.Text`
    margin-top: 5%;
    font-size: 18px; 
    font-weight: medium;
    align-items: center;
    justify-content: center;
=======
    justify-content: center;
`;

const SelectionText = styled.Text`
    font-size: 18px; 
    
   
`;
>>>>>>> ea73c5a429f0db78484863256ad43bc17e901e92

`;

const ButtonGroup = ({
<<<<<<< HEAD
    buttonGroupOnPress = "#C4C4C4",
    buttonGroupText = "Available",
    onClick,
=======
    buttonGroupOnPress1 = "#C4C4C4",
    buttonGroupOnPress2 = '#FFF',
    buttonText1 = "Available",
    buttonText2 = "Out of Stock",
    buttonText3 = "Private",
>>>>>>> ea73c5a429f0db78484863256ad43bc17e901e92
    
}) => {
    return (
        <Cont>
<<<<<<< HEAD
            <StatusSelection changeButtonColor={buttonGroupOnPress} onClick={onClick}>
                <SelectionText>{buttonGroupText}</SelectionText>
            </StatusSelection>

            <StatusSelection changeButtonColor={buttonGroupOnPress} onClick={onClick}> 
                <SelectionText>{buttonGroupText}</SelectionText>
            </StatusSelection>
            
            <StatusSelection changeButtonColor={buttonGroupOnPress} onClick={onClick}>
                <SelectionText>{buttonGroupText}</SelectionText>
=======
            <StatusSelection changeButtonColor={buttonGroupOnPress1}>
                <SelectionText>{buttonText1}</SelectionText>
            </StatusSelection>

            <StatusSelection changeButtonColor={buttonGroupOnPress2}>
                <SelectionText>{buttonText2}</SelectionText>
            </StatusSelection>
            
            <StatusSelection changeButtonColor={buttonGroupOnPress2}>
                <SelectionText>{buttonText3}</SelectionText>
>>>>>>> ea73c5a429f0db78484863256ad43bc17e901e92
            </StatusSelection>
        </Cont>
    );

}


export default ButtonGroup;