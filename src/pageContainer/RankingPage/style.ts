import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 600px;
  height: 100vh;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const PageContentWrapper = styled.div`
  flex: 1;
  padding: 23px 25px 0 25px;
`;

export const PageTitleWrapper = styled.div`
  display: flex;
`;

export const subTitle = styled.p`
  font-size: 16px;
  color: #999999;
  font-weight: 600;
  margin-bottom: 0.3125rem;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

export const RankCardWrapper = styled.div`
  width: 100%;
  height: 804px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 2.5rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
