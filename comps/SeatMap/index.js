import React from 'react';
import styled from 'styled-components/native';

const SeatContainer = styled.View`
    width:660px;
    height:700px;
    background-color: #ECECEC;
    border-radius: 25px;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`;

const SeatRow = styled.View`
    width: 660px;
    justify-content: space-evenly;
    flex-direction: row;
    padding: 40px;
`;

const Seat = styled.TouchableOpacity`
    width: 96px;
    height: 96px;
    border-radius: 10px;
    border: solid 1px;
    background-color: #8A8A8A;
    justify-content: center;
    align-items: center;

`;

const SeatText = styled.Text`
    color: white;
    font-size:24px;
    font-weight: bold;
`;

const SeatMap = ({

}) => {
    return (
        <SeatContainer>
            <SeatRow>
                <Seat>
                    <SeatText>01</SeatText>
                </Seat>
                <Seat>
                    <SeatText>02</SeatText>
                </Seat>
                <Seat>
                    <SeatText>03</SeatText>
                </Seat>
            </SeatRow>
            <SeatRow>
                <Seat>
                    <SeatText>04</SeatText>
                </Seat>
                <Seat>
                    <SeatText>05</SeatText>
                </Seat>
                <Seat>
                    <SeatText>06</SeatText>
                </Seat>
            </SeatRow>
            <SeatRow>
                <Seat>
                    <SeatText>07</SeatText>
                </Seat>
                <Seat>
                    <SeatText>08</SeatText>
                </Seat>
                <Seat>
                    <SeatText>09</SeatText>
                </Seat>
            </SeatRow>
            <SeatRow>
                <Seat>
                    <SeatText>10</SeatText>
                </Seat>
                <Seat>
                    <SeatText>11</SeatText>
                </Seat>
                <Seat>
                    <SeatText>12</SeatText>
                </Seat>
            </SeatRow>
        </SeatContainer>
        
    );

}

export default SeatMap;