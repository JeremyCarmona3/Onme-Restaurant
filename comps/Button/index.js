import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.TouchableOpacity`
    width:${props => props.width};
    height:${props => props.height};
    background-color: ${props => props.bgColor};
    border-radius: 50px;
    align-items:center;
    justify-content: center;
`;

const ButtonText = styled.Text`
 color: white;
 font-size:18px;
 font-weight: bold;

`;

const Buttons = ({
    buttonwidth = 211,
    buttonheight=  42,
    buttontext ="Edit Menu",
    buttoncolor = "#737373"
}) => {
    return (
        <Cont bgColor={buttoncolor} width={buttonwidth} height={buttonheight}>
            <ButtonText>{buttontext}</ButtonText>
        </Cont>
    );

}

export default Buttons;