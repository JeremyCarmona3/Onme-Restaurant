import React from 'react';
import styled from 'styled-components/native';


// const Cont = styled.View`
//     width: 832px;
//     height: 86px;
//     background: #FE4370;
//     border-Radius: 10px;
//     align-Items: center;
//     flex-direction: row;
// `;

// const Left = styled.View`
//     flex:1;
//     align-Items: flex-start;
// `

// const Order = styled.Text`
//     margin-Left: 15px;
//     font-Size: 24px;
//     color: white;
//     font-Family: Poppins;
// `

// const Time = styled.Text`
//     margin-Left: 15px;
//     color: white;
//     font-Family: Poppins;
//     font-Size: 11px;
// `

// const Right = styled.View`
//     flex: 1;
//     align-Items: flex-end;
// `

// const Button = styled.Text`
//     margin-Right: 15px;
//     color: white;
//     font-Family: Poppins;
//     font-Size: 24px;
// `

// const OrderDisplay = ({
//     order = "Order #456",
//    time = "2 October 2021, 9:00pm",
//    button = "tap to view"
// }) => {
//     return (
//     <Cont>
//         <Left>
//             <Order>{order}</Order>
//             <Time>{time}</Time>
//         </Left>
//         <Right>
//             <Button>{button}</Button>
//         </Right>
//     </Cont>
//     );
// }

const Cont = styled.TouchableOpacity`
    width: 100%;
    height: 86px;
    background-color: #FE4370;
    border-radius: 10px;
    padding:18px;

    display: flex;
    flex-direction: row;
    
`;

const OrderNum = styled.Text`
    color: white;
    font-size: 25px;
    font-weight:bold;
`;

const Date = styled.Text`
    color: white;
`;

const OrderDateCont = styled.View`
    justify-content:space-between;
`;

const TapToViewCont= styled.View`
flex-direction: row;
    justify-content: flex-end;
`;

const TapToViewCont2= styled.View`
    flex-direction: row;
`;



const TapText =styled.Text`
    color: white;
    font-size: 25px;
    
`;

const PinkOrderBar = ({
    ordernumber= "Order #456",
    date= "2 October 2021, 9:00pm"
}) => {
    return (
        <Cont>
            <OrderDateCont>
            <OrderNum>{ordernumber}</OrderNum>
            <Date>{date}</Date>
            </OrderDateCont>

            <TapToViewCont2>
            <TapToViewCont>
               <TapText>tap to view</TapText>
            </TapToViewCont>
            </TapToViewCont2>
        </Cont>
    );
}

export default PinkOrderBar;