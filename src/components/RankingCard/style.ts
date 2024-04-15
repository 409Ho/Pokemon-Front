import styled from '@emotion/styled';

export const RankingCardWrapper = styled.div`
  width: 34.375rem;
  height: 6.375rem;
  border-radius: 1.25rem;
  border: 0.0625rem solid #db0000;
  padding: 0.8125rem 1.8125rem 0.8125rem 1.625rem;
  display: flex;
  position: relative;
`;

export const CardContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImgWrapper = styled.div`
  width: 4.75rem;
  height: 4.75rem;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 0.6875rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: fit-content;
  height: 4.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserId = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin-right: 5.5rem;
`;

export const CatchTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`;

export const Ranking = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-top-left-radius: 1.25rem;
  border-bottom-right-radius: 0.75rem;
  border: none;
  background-color: #db0000;
  position: absolute;
  top: -0.0625rem;
  left: -0.0625rem;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
