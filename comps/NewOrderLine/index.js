import React from 'react';
import styled from 'styled-components/native';

// const Line = styled.View`
//     border-width: "1px";
//     border-color: "#DADADA";
//     width: "1060px";
//     height: "3604px";
// `;

// const NewOrder = ({
//    newOrderText = "New Orders",
//    newOrderSize = "24px",
//    newOrderWeight = "400",
//    newOrderColor = "black",
//    line = ""
// }) => {
//     return (
//         <NewOrder 
//             orderSize={newOrderSize}
//             orderWeight={newOrderWeight}
//             orderColor={newOrderColor}
//         >
//            <newOrderText>{newOrderText}</newOrderText>
//            <Line>{line}</Line>
//         </NewOrder>
//     );
// }

// export default NewOrder;

const Cont = styled.View`
`;

const Heading = styled.Text`
    font-size: 35px;
`;

const Line = styled.View`
width: 1000px;
height: 3px;
background-color: #DADADA;
`;

const NewOrderLine =({
    headingtext = 'New Orders',

}) => {
    return (
        <Cont>
            <Heading>{headingtext}</Heading>
            <Line></Line>
        </Cont>
    );
}

export default NewOrderLine;