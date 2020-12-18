import React, {
    useRef,
    useImperativeHandle,
    forwardRef,
    useState,
} from 'react';
import {TextInputProps} from 'react-native';
import {Container, TextInput, TextLabeL} from '../../../src/components/Input/styles';

interface InputProps extends TextInputProps {
name: string;
containerStyle?: object;
children?: string;
}

interface InputRef {
    focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
{children, name, containerStyle = {}, ...rest},
ref,
) => {
const inputElementRef = useRef<any>(null);
const [isFocus, setIsFocus] = useState(false);

useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

return (
    <Container style={containerStyle} isFocused={isFocus}>
    <TextLabeL>{children}</TextLabeL>
    <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
    />
    </Container>
);
};

export default forwardRef(Input);
  