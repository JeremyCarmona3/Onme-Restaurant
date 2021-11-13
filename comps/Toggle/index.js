import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.TouchableOpacity`
    width:211px;
    height:42px;
    background-color: #737373;
    border-radius: 50px;
    align-items:center;
    justify-content: center;
`;

const ButtonText = styled.Text`
 color: white;
 font-size:18px;

`;

const Toggle = ({
    buttonwidth = 211,
    buttonheight=  42,
    buttontext ="Edit Menu",
    buttoncolor = "#737373"
}) => {
    return (
        <Cont background-color={buttoncolor} width={buttonwidth} height={buttonheight}>
            <ButtonText>{buttontext}</ButtonText>
        </Cont>
    );

}

export default Toggle;