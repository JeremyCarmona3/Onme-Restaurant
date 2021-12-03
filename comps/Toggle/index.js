import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const ToggleContainer = styled.View`
    width:245px;
    height:60px;
    background-color: #FFFFFF;
    border-radius: 10px;

    flex-direction: row;
    justify-content: space-between;
`;

const ToggleButton = styled.TouchableOpacity`
    width: 120px;
    height: 60px;
    border-radius: 10px; 
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor};
`;

const ToggleText = styled.Text`
    color: black;
    font-size:18px;
    font-family: "PoppinsRegular";
`;

const Toggle = ({
    newBgColor = "#C4C4C4",
    preparingBgColor = "#FFF",
    newOnPress = () => {},
    prepareOnPress = () => {}
}) => {
    const [isToggle, setIsToggle] = useState(false);

    const NewOn = ({}) => {
        setIsToggle(false);
      }
    
    const PreparingOn = ({}) => {
        setIsToggle(true);
    }

    const [loaded] = useFonts({
        PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
        PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
        PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
        PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
        PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf')
      });
    
      if (!loaded) {
        return null;
      }

    else if (isToggle === true)

    return (
        <ToggleContainer>
            <ToggleButton 
                backgroundColor={newBgColor}
                onPress={NewOn}
                onPressIn={newOnPress}>
                <ToggleText>New</ToggleText>
            </ToggleButton>
            <ToggleButton 
                backgroundColor={preparingBgColor}
                onPress={PreparingOn}
                onPressIn={prepareOnPress}>
                <ToggleText>Preparing</ToggleText>
            </ToggleButton>
        </ToggleContainer>
    );

    else {
        return (
            <ToggleContainer>
                <ToggleButton 
                backgroundColor={newBgColor}
                onPress={NewOn}
                onPressIn={newOnPress}>
                    <ToggleText>New</ToggleText>
                </ToggleButton>
                <ToggleButton 
                backgroundColor={preparingBgColor}
                onPress={PreparingOn}
                onPressIn={prepareOnPress}>

                    <ToggleText>Preparing</ToggleText>
                </ToggleButton>
            </ToggleContainer>
        );
    }
}

export default Toggle;