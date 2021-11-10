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
));

 