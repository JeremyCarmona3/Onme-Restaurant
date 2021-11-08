import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.TouchableOpacity`
    width:204px;
    height:269px;
    background-color: white;
    border-radius: 15px;
    justify-content: center;
`;

const PlusIcon = styled.ImageBackground`
    height:20%;
    width: 25%;
    align-self: center;    
`;

const AddItemText = styled.Text`
    font-size: 18px;
    color: #484848;
    align-self: center;
    justify-content: center;

    margin-top: 20%;
`;

const AddItemCard = ({
    image = require('../../assets/plussign.png'),
}) => {
    return (
    <Cont>
        <PlusIcon source={image}></PlusIcon>
        <AddItemText>Add item</AddItemText>
    </Cont>
    );
}

export default AddItemCard;