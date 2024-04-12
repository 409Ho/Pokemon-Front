'use client';

import * as S from './style';

interface HamburgerModalProps {
  handleModal: () => void;
}

const HamburgerModal: React.FC<HamburgerModalProps> = ({ handleModal }) => (
  <S.ModalWrapper>
    <S.ModalList onClick={handleModal}>홈</S.ModalList>
    <S.ModalList onClick={handleModal}>퀴즈</S.ModalList>
    <S.ModalList onClick={handleModal}>포켓몬 도감</S.ModalList>
    <S.ModalList onClick={handleModal}>랭킹</S.ModalList>
    <S.ModalList onClick={handleModal}>마이페이지</S.ModalList>
  </S.ModalWrapper>
);

export default HamburgerModal;
