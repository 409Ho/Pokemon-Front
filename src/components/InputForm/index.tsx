'use client';

import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import * as S from './style';

interface InputFormProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width: string;
  inputTitle: string;
  isButton?: boolean;
}

const InputForm: React.FC<InputFormProps> = ({
  inputTitle,
  width,
  isButton,
}) => (
  <S.ContentWrapper>
    <S.InputTitle>{inputTitle}</S.InputTitle>
    <S.FormWrapper>
      <S.InputWrapper
        placeholder={`${inputTitle}(을)를 입력해주세요.`}
        width={width}
        type={inputTitle === '비밀번호' ? 'password' : 'text'}
      />
      {isButton && (
        <S.Button>{inputTitle === '이메일' ? '인증' : '확인'}</S.Button>
      )}
    </S.FormWrapper>
  </S.ContentWrapper>
);

export default InputForm;
