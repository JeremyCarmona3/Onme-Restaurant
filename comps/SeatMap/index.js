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

    color: white;
    font-size:24px;
    font-weight: bold;

    justify-content: center;
    text-align: center;

`;

const SeatMap = ({

}) => {
    return (
        <SeatContainer>
            <SeatRow>
                <Seat>01</Seat>
                <Seat>02</Seat>
                <Seat>03</Seat>
            </SeatRow>

            <SeatRow>
                <Seat>04</Seat>
                <Seat>05</Seat>
                <Seat>06</Seat>
            </SeatRow>

            <SeatRow>
                <Seat>07</Seat>
                <Seat>08</Seat>
                <Seat>09</Seat>
            </SeatRow>


            <SeatRow>
                <Seat>10</Seat>
                <Seat>11</Seat>
                <Seat>12</Seat>
            </SeatRow>

        </SeatContainer>
        
    );

}

export default SeatMap;