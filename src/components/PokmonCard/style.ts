import styled from '@emotion/styled';

export const PokemonCartWrapper = styled.div`
  width: 10.625rem;
  height: 14.9375rem;
  border: 1px solid #db0000;
  border-radius: 1.25rem;
  background-color: #ffffff;
  padding: 0.875rem 0.4375rem 1.0625rem 0.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.375rem;
  cursor: pointer;
`;
export const PokemonTitleWrapper = styled.div`
  width: 100%;
  height: 1.5625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
`;

export const PokemonBallImgWrapper = styled.div`
  width: 1.75rem;
  height: 1.5625rem;
  overflow: hidden;
  position: relative;
`;

export const PokemonTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

export const PokemonImgWrapper = styled.div`
  width: 6.75rem;
  height: 6.75rem;
  overflow: hidden;
  position: relative;
`;

export const PokemonTypeWrapper = styled.div`
  width: 9.75rem;
  height: 1.5rem;
  display: flex;
  gap: 0.375rem;
  justify-content: center;
`;
