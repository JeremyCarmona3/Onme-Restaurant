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
 font-size:${props => props.fontSize};
 font-weight: bold;

`;

const Buttons = ({
    buttonwidth = '211px',
    buttonheight=  '42px',
    buttontext ="Edit Menu",
    buttoncolor = "#737373",
    fontsize = "24px",
}) => {
    return (
        <Cont bgColor={buttoncolor} width={buttonwidth} height={buttonheight}>
            <ButtonText fontSize={fontsize}>{buttontext}</ButtonText>
        </Cont>
    );

}

export default Buttons;