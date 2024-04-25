import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 37.5rem;
  height: 100vh;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  overflow: scroll;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PageContentWrapper = styled.div`
  flex: 1;
  padding: 1.875rem 1.25rem 0 1.25rem;
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const SearchInputWrapper = styled.div`
  width: 35rem;
  height: 3.8125rem;
  border-radius: 1rem;
  border: 1px solid #d6d6d6;
  padding: 1.25rem 1rem 1.25rem 1rem;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.875rem;
`;

export const SearchInput = styled.input`
  width: 25rem;
  height: 1.3125rem;
  outline: none;
  font-size: 1.125rem;
  border: none;
  color: #999999;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const PokemonTypeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5625rem;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const PokemonCardWrapper = styled.div`
  width: 34.375rem;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 1.25rem;
  background-color: #ffffff;

  ::-webkit-scrollbar {
    display: none;
  }
`;
