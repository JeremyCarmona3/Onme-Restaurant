import React from 'react';
import styled from 'styled-components/native';

const Seat = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: ${props => props.changeseatColor};

    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.changeseatBorder};

    border-radius: 10px;
    align-items:center;
    justify-content: center;
`;

const SeatText = styled.Text`
 color: white;
 font-size: 15px;
 font-weight: bold;

`;

const SeatComp = ({
    seatColor= "#2E2E2E",
    seatNumber= "01",
    seatBorder= "#626262",
    
}) => {
    return (
        <Seat changeseatColor={seatColor} changeseatBorder={seatBorder} seatOnPress>
            <SeatText>{seatNumber}</SeatText>
        </Seat>
    );

}

export default SeatComp;