import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 37.5rem;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const PageContentWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBall = styled.div`
  width: 100%;
  height: 25.625rem;
  border-bottom: 0.25rem solid #000000;
  background-color: #ff0000;
`;

export const WhiteBall = styled.div`
  width: 15.625rem;
  height: 15.625rem;
  position: absolute;
  border: 0.25rem solid #000000;
  border-radius: 100%;
  background-color: #ffffff;
  top: 18.4375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonImgWrapper = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  overflow: hidden;
  position: relative;
`;

export const PokemonInput = styled.input`
  width: 25.875rem;
  height: 5.375rem;
  border: 1px solid #ff0000;
  outline: none;
  font-size: 1.5rem;
  border-radius: 12.5rem;
  margin-top: 14.75rem;
  text-align: center;
  font-weight: 700;

  ::placeholder {
    color: #999999;
  }
`;

export const SubmitButton = styled.button`
  width: 25.875rem;
  height: 4.3125rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  border-radius: 0.75rem;
  border: none;
  background-color: #ff0a01;
  margin-top: 2.5rem;
`;
