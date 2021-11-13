import React from 'react';
import styled from 'styled-components/native';

import MenuItemInput from '../MenuItemInput';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

const Cont = styled.View`
    z-index: 2;
    width: 1001px;
    height:832px;
    background-color: white;
    border-radius: 20px;
    padding: 4%;
    flex-direction: column;
`;

const AddItemText = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin: 3%;
`;

const TopRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:5%;
    width: 90%;
`;

const MidRow = styled.View`
    margin-bottom:3%;
    flex-direction: column;
    margin-bottom:5%;
`;

const BotRow = styled.View`
    margin-bottom:3%;
    flex-direction: column;
    margin-bottom:7%;
`;

const AddButton = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    
`;

const Cont2 = styled.View`
    justify-content: center;
    align-items: center;
`;

const ButGroup = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
    
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
            </MidRow>

            <BotRow>
            <MenuItemInput title='Category Selection' width='808px'/>
            </BotRow>

            <ButGroup>
            <ButtonGroup/>
            </ButGroup>

            </Cont2>

            <AddButton>
            <Button buttontext='ADD TO MENU' buttoncolor='#FE4370' buttonwidth='268px' buttonheight='72px' fontsize= '22px'/>
                
            </AddButton>
        </Cont>
    );
}

export default AddItemToMenu;
