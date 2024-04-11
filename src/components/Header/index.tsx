'use client';

import Image from 'next/image';

import * as I from '@/asset';
import pokeLogo from '@/asset/png/PokemonQuizLogo.png';

import * as S from './style';

const Header = () => (
  <S.HeaderWrapper>
    <S.ContentWrapper>
      <S.LogoWrapper>
        <Image src={pokeLogo} alt="로고" fill />
      </S.LogoWrapper>
      <S.IconWrapper>
        <I.HamburgerIcon />
      </S.IconWrapper>
    </S.ContentWrapper>
  </S.HeaderWrapper>
);

export default Header;
