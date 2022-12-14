import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

 import { Container,Label } from './styles';

const Button = ({label,color,...rest}) => {
  return (
    <Container {...rest} color={color} >
      <Label>{label}</Label>

    </Container>
  );
}

export default Button;