import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

import MenuCard from '../../../comps/Card';
import ButtonGroup from '../../../comps/ButtonGroup';
import Buttons from '../../../comps/Button';
import AddItemCard from '../../../comps/AddItemCard';
import OrderNumberCard from '../../../comps/OrderNumberCard';
import OrderCosts from '../../../comps/OrderCosts';
import OrderStatsCard from '../../../comps/OrderStatsCard';
<<<<<<< HEAD
import MeunItem from '../../../comps/MenuItem';
import QtyItem from '../../../comps/QtyItem';
import OpenText from '../../../comps/OpenText';
import NewOrder from '../../../comps/NewOrder';
=======
import NavBar from '../../../comps/navbar_Min';
>>>>>>> d8936842b9ecfd558c6890253c9c2d1b35fd1209

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

<<<<<<< HEAD
.add('ButtonGroup', () => (
  <ButtonGroup/>
))

=======
<<<<<<< HEAD
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
  <NewOrder />
=======
>>>>>>> 5d780d15793cebb31d97d52d70fb161258b71791
  .add('Buttons', () => (
    <Buttons/>
))

.add('Navigation', () => (
  <NavBar/>
>>>>>>> d8936842b9ecfd558c6890253c9c2d1b35fd1209
));


{/* <MeunItem/>
<QtyItem/>
<OpenText/>
<NewOrder/> */}

 