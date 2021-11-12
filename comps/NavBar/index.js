import React from 'react';
import styled from 'styled-components/native';

const NavCont = styled.View`
    display: flex;
    height: 100%;
    width: 115px;
    background-color: #737373;
    

`;

const MenuItem1 = styled.View`
    background-color: #fad;
    height: 16.6666%;
    justify-content: center;
    align-items: center;
    `;

const MenuItem2 = styled.View`
    height: 16.6666%;
    justify-content: center;
    align-items: center;
    `;

const MenuItem3 = styled.View`
    height: 16.6666%;
    background-color: #fad;
    justify-content: center;
    align-items: center;
    `;

const MenuItem4 = styled.View`
    height: 16.6666%;
    justify-content: center;
    align-items: center;
`;

const MenuItem5 = styled.View`
    height: 16.6666%;
    background-color: #fad;
    justify-content: center;
    align-items: center;
    `;

const MenuItem6 = styled.View`
    height: 16.6666%;
    justify-content: center;
    align-items: center;
`;

const NavIcon = styled.ImageBackground`
    height: 50px;
    width: 50px;
    
`;


const NavBar = ({
    image1 = require('../../assets/nav1.png'),
    image2 = require('../../assets/nav2_orderhistory.png'),
    image3 = require('../../assets/nav3_seating.png'),
    image4 = require('../../assets/nav4_menu.png'),
    image5 = require('../../assets/nav5_setting.png'),
    image6 = require('../../assets/nav_logo.png'),

}) => {
    return (
        <NavCont>
           <MenuItem1>
            <NavIcon source={image1} resizeMode="cover" borderRadius="25px">
            </NavIcon>
           </MenuItem1>

           <MenuItem2>
           <NavIcon source={image2} resizeMode="cover" borderRadius="25px">
            </NavIcon>
           </MenuItem2>

           <MenuItem3>
           <NavIcon source={image3} resizeMode="cover" borderRadius="25px">
        </NavIcon>
           </MenuItem3>

           <MenuItem4>
           <NavIcon source={image4} resizeMode="cover" borderRadius="25px">
        </NavIcon>
           </MenuItem4>

           <MenuItem5>
           <NavIcon source={image5} resizeMode="cover" borderRadius="25px">
        </NavIcon>
           </MenuItem5>

           <MenuItem6>
           <NavIcon source={image6} resizeMode="cover" borderRadius="25px">
        </NavIcon>
           </MenuItem6>
        </NavCont>
    )
};

export default NavBar;
