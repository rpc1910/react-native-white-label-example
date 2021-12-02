import React from 'react';
import { Alert } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { APP_NAME } from '@flavor/constants/text';
import Text from '../elements/text';
import Button from '../elements/button';

function Home() {
  const theme = useTheme();

  function handleClick() {
    Alert.alert('Welcome', `Welcome to ${APP_NAME}`);
  }

  return (
    <Container>
      <Text size={30} color={theme.colors.text} style={{ marginBottom: 30 }}>
        {APP_NAME}
      </Text>
      <Button onPress={handleClick}>Click me</Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default Home;
