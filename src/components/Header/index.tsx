'use client';

import Image from 'next/image';

import * as I from '@/asset';
import pokeLogo from '@/asset/png/PokemonQuizLogo.png';

import * as S from './style';

interface HeaderProps {
  handleModal?: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleModal }) => (
  <S.HeaderWrapper>
    <S.ContentWrapper>
      <S.LogoWrapper>
        <Image src={pokeLogo} alt="로고" fill sizes="13.125rem 2.5625rem" />
      </S.LogoWrapper>
      <S.IconWrapper onClick={handleModal}>
        <I.HamburgerIcon />
      </S.IconWrapper>
    </S.ContentWrapper>
  </S.HeaderWrapper>
);

export default Header;
