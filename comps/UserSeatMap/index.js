import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

import SeatComp from '../SeatComp/index';


const SeatMapContainer = styled.View`
    width: 315px;
    height: 430px;
    flex-direction: column;
    align-items: center;
`;

const Row = styled.View`
    width: 430px;

    justify-content: space-evenly;
    flex-direction: row;

    padding: 30px;

`;

const UserSeatMap = ({

}) => {
    return (
        <SeatMapContainer>
            <Row>
                <SeatComp/>
                <SeatComp seatNumber="02"/>
                <SeatComp seatNumber="03"/>
            </Row>

            <Row>
                <SeatComp seatNumber="04"/>
                <SeatComp seatNumber="05" seatColor="#A57760" seatBorder="#FFFFFF"/>
                <SeatComp seatNumber="06" seatColor="#A57760" seatBorder="#FFFFFF"/>
            </Row>

            <Row>
                <SeatComp seatNumber="07" seatColor="#A57760" seatBorder="#FFFFFF"/>
                <SeatComp seatNumber="08" seatColor="#FE4370" seatBorder="#FFFFFF"/>
                <SeatComp seatNumber="09"/>
            </Row>

            <Row>
                <SeatComp seatNumber="10" seatColor="#A57760" seatBorder="#FFFFFF"/>
                <SeatComp seatNumber="11" seatColor="#A57760" seatBorder="#FFFFFF"/>
                <SeatComp seatNumber="12"/>
            </Row>

        </SeatMapContainer>
    );

}

export default UserSeatMap;