import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';
import SeatMap from '../../../comps/SeatMap';
import MenuCard from '../../../comps/Card';
import ButtonGroup from '../../../comps/ButtonGroup';
import Buttons from '../../../comps/Button';
import AddItemCard from '../../../comps/AddItemCard';
import OrderNumberCard from '../../../comps/OrderNumberCard';
import OrderCosts from '../../../comps/OrderCosts';
import OrderStatsCard from '../../../comps/OrderStatsCard';
import MenuItemInput from '../../../comps/MenuItemInput';
import QtyItem from '../../../comps/QtyItem';
import OpenText from '../../../comps/OpenText';
import NewOrderLine from '../../../comps/NewOrderLine';
import NavBar from '../../../comps/navbar_Min';
// import NewOrder from '../../../comps/NewOrder';
// import NavBar from '../../../comps/navbar_Min';
import Toggle from '../../../comps/Toggle';
import ListItem from '../../../comps/ListItem';


import NewOrderLine from '../../../comps/NewOrderLine';

storiesOf('Comps', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
 
  .add('Card', () => (
      <MenuCard/>
  ))

  .add('AddItemCard', () => (
    <AddItemCard/>
))

  .add('OrderStatsCard', () => (
  <OrderStatsCard/>
))

.add('OrderNumberCard', () => (
  <OrderNumberCard/>
))

.add('OrderCosts', () => (
  <OrderCosts/>
))

.add('ButtonGroup', () => (
  <ButtonGroup/>
))

.add('Buttons', () => (
  <Buttons/>
))
.add('MenuItem', () => (
  <MeunItem />
))
.add('QtyItem', () => (
  <QtyItem />
))
.add('OpenText', () => (
  <OpenText />
))

.add('NewOrder', () => (
  <NewOrderLine />
))

.add('Toggle', () => (
  <Toggle />
))

.add('ListItem', () => (
  <ListItem />
))

.add('SeatMap', () => (
  <SeatMap />
))

.add('Navigation', () => (
  <NavBar/>
));


{/* <MeunItem/>
<QtyItem/>
<OpenText/>
<NewOrder/> */}

 