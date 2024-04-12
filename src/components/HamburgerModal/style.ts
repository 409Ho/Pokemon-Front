import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 16.5rem;
  height: 16.125rem;
  display: inline-flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem 0 1rem 2rem;
  position: absolute;
  top: 5.25rem;
  right: 2rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  border: none;
  box-shadow: 0px 0.25rem 0.625rem rgba(0, 0, 0, 0.3);
`;

export const ModalList = styled.span`
  width: fit-content;
  font-size: 1.5rem;
  font-weight: 600;
  color: #bbbbbb;
  cursor: pointer;
  :hover {
    color: #ff0501;
  }
`;
