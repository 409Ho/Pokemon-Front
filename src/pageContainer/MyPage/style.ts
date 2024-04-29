import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 37.5rem;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 15.625rem;
  height: 15.625rem;
  border-radius: 100%;
  border: none;
  position: relative;
  background-color: red;
  overflow: hidden;
`;

export const EditProfileButton = styled.button`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
  border: none;
  border-radius: 100%;
  position: absolute;
  bottom: 1.5625rem;
  right: 1.25rem;
  cursor: pointer;
`;

export const UserTitle = styled.div`
  width: 6.0625rem;
  height: 1.8125rem;
  border-radius: 1.25rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  border: 1px solid #ffb800;
  color: #ffb800;
`;

export const UserId = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const UserInfoTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #929292;
`;

export const MoveBookButton = styled.button`
  width: 22.625rem;
  height: 5.5rem;
  border-radius: 1.5rem;
  border: none;
  background-color: #ff0000;
  display: flex;
  gap: 0.4375rem;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.p`
  font-size: 1.5rem;
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
  width: 26.375rem;
  height: 18rem;
  background-color: #ffffff;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  position: absolute;
  top: 396px;
  z-index: 2;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const ModalSelect = styled.div`
  width: 10.9375rem;
  height: 10.9375rem;
  border-radius: 1rem;
  font-size: 1.125rem;
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
  gap: 1rem;
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

export const ContentWrapper = styled.div`
  flex: 1;
  width: 22.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const Container = styled.div`
  width: 15.625rem;
  height: 15.625rem;
  position: relative;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  margin: 1.4375rem 0 6.625rem 0;
`;
