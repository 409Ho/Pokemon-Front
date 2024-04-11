'use client';

import * as S from './style';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface PrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isFill: boolean;
  size: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  isFill,
  size,
  children,
}) => (
  <S.ButtonWrapper isFill={isFill} size={size}>
    {children}
  </S.ButtonWrapper>
);

export default PrimaryButton;
