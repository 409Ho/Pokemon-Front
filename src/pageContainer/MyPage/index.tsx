'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Header } from '@/components';

import * as I from '@/asset';
import * as S from './style';

const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const testRank = 1;
  return (
    <>
      <S.PageWrapper>
        {modalOpen && (
          <S.ModalBackGround>
            <S.ModalWrapper>
              <S.ModalTitleWrapper>
                이미지 선택
                <S.CancleIcon onClick={() => setModalOpen(prev => !prev)}>
                  닫기
                </S.CancleIcon>
              </S.ModalTitleWrapper>
              <S.FlexBox>
                <S.ModalSelect>
                  <I.ImgIcon />내 포켓몬으로 변경
                </S.ModalSelect>
                <S.ModalSelect>
                  <I.ImgIcon />
                  이미지 등록
                </S.ModalSelect>
              </S.FlexBox>
            </S.ModalWrapper>
          </S.ModalBackGround>
        )}
        <Header />
        {testRank === 1 && (
          <S.IconWrapper>
            <I.CrownIcon />
          </S.IconWrapper>
        )}
        <S.ProfileWrapper isKing={testRank === 1 && true}>
          <S.ImgWrapper>
            <Image
              src={
                'https://i.namu.wiki/i/hVQb3YLNeQpkseGZmd3lP40ukGuTps9L2_VyPT6tGqp6YYhoMJLJ8L9_3YtgOAs5pDRBjVNb6YLKvxg9UOBFrA.webp'
              }
              alt="프로필 사진"
              fill
              unoptimized
            />
          </S.ImgWrapper>
          <S.EditProfileButton onClick={() => setModalOpen(prev => !prev)}>
            <I.PenIcon />
          </S.EditProfileButton>
          <S.UserInfoWrapper>
            <S.UserTitle>포켓몬 트레이너</S.UserTitle>
            <S.UserId>나는야 김경수</S.UserId>
            <S.TitleWrapper>
              <S.UserInfoTitle>잡은 포켓몬수 : 1000마리</S.UserInfoTitle>
              <S.UserInfoTitle>도감 종류 : 108가지</S.UserInfoTitle>
            </S.TitleWrapper>
            <S.MoveBookButton>
              <I.BookIcon />
              <S.ButtonTitle>도감보기</S.ButtonTitle>
            </S.MoveBookButton>
          </S.UserInfoWrapper>
        </S.ProfileWrapper>
      </S.PageWrapper>
    </>
  );
};

export default MyPage;
