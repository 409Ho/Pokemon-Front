'use client';

import Image from 'next/image';

import 리자몽 from '@/asset/png/리자몽.png';

import { Header, PrimaryButton } from '@/components';

import * as S from './style';

const TitlePage = () => (
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const handleModal = () => setIsModalOpen(prev => !prev);

  <S.PageWrapper>
    <S.ContentWrapper>
      <Header />
      <S.TitlePageContent>
        <S.TItleImageWrapper>
          <Image
            src={리자몽}
            alt="타이틀 이미지"
            fill
            sizes="27.4375rem 25rem"
          />
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
export default TitlePage;
