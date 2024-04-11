import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{ isFill: boolean; size: string }>`
  width: ${({ size }) => size};
  height: 4.3125rem;
  background-color: ${({ isFill }) => (isFill ? '#ffffff' : 'transparent')};
  font-size: 1.5rem;
  color: ${({ isFill }) => (isFill ? '#FF0A01' : '#ffffff')};
  border-radius: 0.75rem;
  border: 1px solid #ffffff;
  font-weight: 600;
`;
