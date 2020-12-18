import React from 'react';
import { text, select, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import Button from './'

storiesOf('ButtonDefault', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
  <Button
    color={color('Button color', '#428cff')}
    //color={select("color", {Blue: "blue", Dark: "red"}, "blue")}
    onPress={action("clicked")}>
    {text('Button text', 'Button Default')}
  </Button>
));