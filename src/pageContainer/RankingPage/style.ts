import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 37.5rem;
  height: 100vh;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const PageContentWrapper = styled.div`
  flex: 1;
  padding: 1.4375rem 1.5625rem 0 1.5625rem;
`;

export const PageTitleWrapper = styled.div`
  display: flex;
`;

export const subTitle = styled.p`
  font-size: 1rem;
  color: #999999;
  font-weight: 600;
  margin-bottom: 0.3125rem;
`;

export const Title = styled.h1`
  font-size: 1.5625rem;
  font-weight: 700;
`;

export const RankCardWrapper = styled.div`
  width: 100%;
  height: 50.25rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 2.5rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
