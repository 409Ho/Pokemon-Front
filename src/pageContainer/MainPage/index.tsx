'use client';

import Image from 'next/image';

import { useState } from 'react';

import 리자몽 from '@/asset/png/리자몽.png';

import { Header } from '@/components';

import * as S from './style';

const MainPage = () => {
  const [inputValue, setInputValue] = useState('');
  console.log('테스트입니다.');

  return (
    <S.PageWrapper>
      <Header />
      <S.PageContentWrapper>
        <S.WhiteBall>
          <S.PokemonImgWrapper>
            <Image src={리자몽} alt="포켓몬 사진" fill unoptimized />
          </S.PokemonImgWrapper>
        </S.WhiteBall>
        <S.TopBall></S.TopBall>
        <S.PokemonInput
          placeholder="포켓몬의 이름을 맞추자!"
          onChange={e => setInputValue(e.target.value)}
        />
        <S.SubmitButton>{inputValue} 넌내꺼야!</S.SubmitButton>
      </S.PageContentWrapper>
    </S.PageWrapper>
  );
};

export default MainPage;
