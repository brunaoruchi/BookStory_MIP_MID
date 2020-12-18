import React from 'react';
import { text, select, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import ButtonRow from './';

storiesOf('ButtonIcon', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Default', () => (
        <ButtonRow
            colorBackground={color('Button background color', '#50c8ff')}
            color={color('Button icon color', '#ffffff')}
            icon={select("Text icon", {Reader: "reader", Edit: "pencil", Trash: "trash", Bug: "bug", Leaf: "leaf", Eye: "eye"}, "reader")}
            onPress={action("clicked")}
        /> 
    ));
    // .add('Unknown', () => (
    //     <ButtonRow
    //         colorBackground={color('Button background color', 'red')}
    //         color={color('Button icon color', '#ffffff')}
    //         icon="question"
    //         onPress={action("clicked")}
    //     /> 
    // ));