'use client';

import * as S from './style';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface PrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isFill: boolean;
  width: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  isFill,
  width,
  children,
}) => (
  <S.ButtonWrapper isFill={isFill} width={width}>
    {children}
  </S.ButtonWrapper>
);

export default PrimaryButton;
