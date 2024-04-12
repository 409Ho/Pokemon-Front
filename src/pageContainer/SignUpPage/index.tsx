'use client';

import { Header, InputForm, PrimaryButton } from '@/components';
import * as S from './style';

const SignUpPage = () => (
  <S.SignUpPageWrapper>
    <Header />
    <S.ContentWrapper>
      <S.InputWrapper>
        <InputForm inputTitle="이메일" isButton={true} width="21.5862rem" />
        <InputForm inputTitle="인증번호" isButton={true} width="21.5862rem" />
        <InputForm inputTitle="비밀번호" isButton={false} width="28.875rem" />
        <InputForm inputTitle="닉네임" isButton={false} width="28.875rem" />
      </S.InputWrapper>
      <PrimaryButton isFill={true} width="28.625rem">
        가입
      </PrimaryButton>
    </S.ContentWrapper>
  </S.SignUpPageWrapper>
);

export default SignUpPage;
