'use client';

import Image from 'next/image';

import { useState } from 'react';

import 리자몽 from '@/asset/png/리자몽.png';

import { Header, PrimaryButton } from '@/components';

import * as S from './style';
import HamburgerModal from '@/components/HamburgerModal';

const TitlePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModal = () => setIsModalOpen(prev => !prev);

  return (
    <S.PageWrapper>
      <S.ContentWrapper>
        {isModalOpen && <HamburgerModal handleModal={handleModal} />}
        <Header handleModal={handleModal} />
        <S.TitlePageContent>
          <S.TItleImageWrapper>
            <Image src={리자몽} alt="타이틀 이미지" fill />
          </S.TItleImageWrapper>
          <S.ButtonWrapper>
            <PrimaryButton isFill={true} width="29.9375rem">
              로그인
            </PrimaryButton>
            <PrimaryButton isFill={false} width="29.9375rem">
              회원가입
            </PrimaryButton>
          </S.ButtonWrapper>
        </S.TitlePageContent>
      </S.ContentWrapper>
    </S.PageWrapper>
  );
};

export default TitlePage;
