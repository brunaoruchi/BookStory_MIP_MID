import React from 'react';
import { text, select, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import Input from './'

storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Input name="desfolha" placeholder="Name">
        {text('Label Input', '')}
    </Input>
  ))
  .add('with label', () => (
    <Input name="desfolha" placeholder="">
        {text('Label Input', 'Input with text')}
    </Input>
  ))
  .add('default numeric', () => (
    <Input name="desfolha" keyboardType="numeric" placeholder="0">
        {text('Label Input', '')}
    </Input>
  ))
  .add('with label numeric', () => (
    <Input name="desfolha" keyboardType="numeric" placeholder="0">
        {text('Label Input', 'Input with text')}
    </Input>
  ))
;

