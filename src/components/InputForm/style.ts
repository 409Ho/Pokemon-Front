import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: fit-content;
  background-color: red;
`;

export const InputTitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 0.875rem;
  color: #ffffff;
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 0.4437rem;
`;

export const InputWrapper = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  height: 5rem;
  color: #888888;
  border: none;
  font-size: 0.9375rem;
  border-radius: 0.75rem;
  padding: 0 0.9375rem 0 1.625rem;
  border: 1px solid black;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: #c5c5c5;
  }
`;

export const Button = styled.button`
  width: 6.9625rem;
  height: 5rem;
  font-size: 1.875rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  background-color: #ff994f;
  color: #ffffff;
`;
