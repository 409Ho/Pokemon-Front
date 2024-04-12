'use client';

import { Header, InputForm, PrimaryButton } from '@/components';
import * as S from './style';

const SingInPage = () => (
  <S.SignInPageWrapper>
    <Header />
    <S.ContentWrapper>
      <S.ButtonWrapper>
        <InputForm inputTitle="이메일" width="28.625rem" />
        <InputForm inputTitle="비밀번호" width="28.625rem" />
      </S.ButtonWrapper>
      <PrimaryButton isFill={true} width="479px">
        로그인
      </PrimaryButton>
    </S.ContentWrapper>
  </S.SignInPageWrapper>
);

export default SingInPage;
