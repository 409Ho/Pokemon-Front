import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 600px;
  height: 100vh;
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
  height: 410px;
  border-bottom: 4px solid #000000;
  background-color: #ff0000;
`;

export const WhiteBall = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  border: 4px solid #000000;
  border-radius: 100%;
  background-color: #ffffff;
  top: 18.4375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: relative;
`;

export const PokemonInput = styled.input`
  width: 414px;
  height: 86px;
  border: 1px solid #ff0000;
  outline: none;
  font-size: 24px;
  border-radius: 12.5rem;
  margin-top: 14.75rem;
  text-align: center;
  font-weight: 700;

  ::placeholder {
    color: #999999;
  }
`;

export const SubmitButton = styled.button`
  width: 414px;
  height: 69px;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  border-radius: 12px;
  border: none;
  background-color: #ff0a01;
  margin-top: 2.5rem;
`;
