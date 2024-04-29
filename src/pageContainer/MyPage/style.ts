import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileWrapper = styled.div<{ isKing: boolean }>`
  width: 250px;
  height: 250px;
  position: relative;
  margin-top: ${({ isKing }) => (isKing ? '5px' : '93px')};
`;

export const IconWrapper = styled.div`
  margin-top: 3rem;
`;

export const ImgWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  border: none;
  position: relative;
  background-color: red;
  overflow: hidden;
`;

export const EditProfileButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
  border: none;
  border-radius: 100%;
  position: absolute;
  bottom: 25px;
  right: 20px;
  cursor: pointer;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 1.4375rem;
  align-items: center;
`;

export const UserTitle = styled.div`
  width: 97px;
  height: 29px;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  border: 1px solid #ffb800;
  color: #ffb800;
`;

export const UserId = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const UserInfoTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #929292;
`;

export const MoveBookButton = styled.button`
  width: 362px;
  height: 88px;
  border-radius: 24px;
  border: none;
  background-color: #ff0000;
  margin: 7.9375rem;
  display: flex;
  gap: 0.4375rem;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
`;

export const ModalBackGround = styled.div`
  width: 37.5rem;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 422px;
  height: 288px;
  background-color: #ffffff;
  border-radius: 16px;
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  top: 24.75rem;
  z-index: 2;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const ModalSelect = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 16px;
  font-size: 18px;
  color: #999999;
  border: 1px solid #999999;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.375rem;

  > svg {
    stroke: #999999;
  }

  :hover {
    background-color: #ff0000;
    border: 1px solid #ff0000;
    color: #ffffff;

    > svg {
      stroke: #ffffff;
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const CancleIcon = styled.div`
  font-size: 0.9375rem;
  color: #999999;
  cursor: pointer;
`;

export const ModalTitleWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
