import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 37.5rem;
  min-height: 100vh;
  max-height: 100%;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ShowPokemonContainer = styled.div`
  width: 37.5rem;
  height: 37.5rem;
  border-bottom-left-radius: 3.75rem;
  border-bottom-right-radius: 3.75rem;
  background-color: #ff0000;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.25rem;
  left: 1.0625rem;
`;

export const LargeCircle = styled.div`
  width: 4.75rem;
  height: 4.75rem;
  background-color: #7eb9ff;
  border: none;
  border-radius: 100%;
  position: absolute;
  padding: 1rem 0 0 0.8125rem;
  top: 1.5rem;
  right: 1.75rem;
`;

export const SmallCircle = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: #ffffff;
  border: none;
  border-radius: 100%;
`;

export const ImgWrapper = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  position: relative;
`;

export const PokemonInfoContainer = styled.div`
  flex: 1;
  padding: 2.4375rem 2.5625rem 0 2.5625rem;
`;

export const PokemonNumber = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const PokemonCount = styled.p`
  font-size: 1.25rem;
  color: #5c5c5c;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const flexBox = styled.div`
  display: flex;
  gap: 0.4375rem;
`;

export const PokemonName = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
`;

export const FlavorTextBox = styled.div`
  width: 32rem;
  font-size: 1.5rem;
  color: #5c5c5c;
`;
