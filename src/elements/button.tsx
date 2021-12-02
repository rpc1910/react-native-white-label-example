import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import Text from './text';

type ButtonProps = TouchableOpacityProps & { children: string };

function Button({ children, ...rest }: ButtonProps) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <Text size={21} color={theme.colors.secondary}>
        {children}
      </Text>
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  padding: 10px 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default Button;
