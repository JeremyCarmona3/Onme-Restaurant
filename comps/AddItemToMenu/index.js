import React from 'react';
import styled from 'styled-components/native';

import MenuItemInput from '../MenuItemInput';
import Button from '../Button'

const Cont = styled.View`
    z-index: 2;
    width: 1001px;
    height:832px;
    background-color: lightgrey;
    border-radius: 20px;
    padding: 4%;

 
`;

const AddItemText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin: 3%;
`;

const TopRow = styled.View`
    flex-direction: row;
`;

const MidRow = styled.View`
`;

const AddButton = styled.View`
`;

const Cont2 = styled.View`
    justify-content: space-between;
`;

const AddItemToMenu = ({

}) => {
    return (
        <Cont>
            <AddItemText>Add Item to Menu</AddItemText>

            <Cont2>
            <TopRow>
            <MenuItemInput/>
            <MenuItemInput title='Price' width='150px'/>
            </TopRow>

            <MidRow>
            <MenuItemInput title='Description' width='808px' height='74px'/>
            <MenuItemInput title='Category Selection' width='808px'/>
            </MidRow>
            </Cont2>

            <AddButton>
            <Button buttontext='ADD TO MENU' buttoncolor='#FE4370'/>
            </AddButton>
        </Cont>
    );
}

export default AddItemToMenu;
