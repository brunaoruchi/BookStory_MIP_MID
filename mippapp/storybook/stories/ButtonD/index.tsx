import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container, ButtonText} from '../../../src/components/Button/styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({children, color, ...rest}) => (
  <Container {...rest} style={{backgroundColor: color}}>
    <ButtonText>{children}</ButtonText>
  </Container>
);
export default Button;