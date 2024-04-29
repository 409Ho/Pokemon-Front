'use client';

import { Header, InputForm, PrimaryButton } from '@/components';
import * as S from './style';

const SingInPage = () => (
  <S.SignInPageWrapper>
    <Header />
    <S.ContentWrapper>
      <S.FlexBox>
        <InputForm width="28.625rem" inputTitle="이메일" isButton={false} />
        <InputForm width="28.625rem" inputTitle="비밀번호" isButton={false} />
      </S.FlexBox>
      <PrimaryButton isFill={true} width="29.9375rem">
        로그인
      </PrimaryButton>
    </S.ContentWrapper>
  </S.SignInPageWrapper>
);

export default SingInPage;
