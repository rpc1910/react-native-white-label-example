import styled from 'styled-components/native';

type TextProps = {
  size?: number;
  color?: string;
};

const Text = styled.Text<TextProps>`
  font-size: ${({ size }) => size || 14}px;
  color: ${({ color }) => color || '#000'};
`;

export default Text;
