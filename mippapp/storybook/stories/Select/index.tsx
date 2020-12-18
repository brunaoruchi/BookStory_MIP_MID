import React, {useState} from "react";
import { Picker } from '@react-native-community/picker';
import { PickerContainer, PickerContainerText} from '../../../src/pages/Anotacao/new/styles';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

interface Props {
    text: string;
}

const Select: React.FC <Props> = (props) => {
    const [estadioDaCultura, setEstadioDaCultura] = useState('V4');
    return (
    <PickerContainer>
        <PickerContainerText>{props.text}</PickerContainerText>
        <Picker
        selectedValue={estadioDaCultura}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue) =>
            setEstadioDaCultura(itemValue.toString())
        }>
        <Picker.Item label="Pré-emergência" value="Pré-emergência" />
        <Picker.Item label="VE" value="VE" />
        <Picker.Item label="VC" value="VC" />
        <Picker.Item label="V1" value="V1" />
        <Picker.Item label="V3" value="V3" />
        <Picker.Item label="V4" value="V4" />
        <Picker.Item label="V5" value="V5" />
        <Picker.Item label="V6" value="V6" />
        <Picker.Item label="V7" value="V7" />
        <Picker.Item label="V8" value="V8" />
        <Picker.Item label="V9" value="V9" />
        </Picker>
    </PickerContainer>)
}

storiesOf('Select', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Default', () => (
        <Select text={text("Label Select","Estádio da Cultura:")}/>
    ));