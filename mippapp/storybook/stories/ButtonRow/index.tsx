import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, Icon} from '../../../src/components/ButtonRow/styles';

interface ButtonProps extends RectButtonProperties {
  icon: string;
  color: string;
  colorBackground: string;
}

const ButtonRow: React.FC<ButtonProps> = ({
  icon,
  color,
  colorBackground,
  ...rest
}) => (
  <Container {...rest} style={{backgroundColor: colorBackground}}>
    <Icon name={icon} size={18} color={color} />
  </Container>
);

export default ButtonRow;