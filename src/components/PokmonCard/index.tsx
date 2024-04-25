'use client';

import Image from 'next/image';

import { PokemonInfoType } from '@/types';

import { PokemonTypeCard } from '@/components';

import 몬스터볼 from '@/asset/png/몬스터볼.png';

import * as S from './style';
import React from 'react';

const PokemonCard: React.FC<PokemonInfoType> = ({ data }) => (
  <S.PokemonCartWrapper>
    <S.PokemonTitleWrapper>
      <S.PokemonNameWrapper>
        <S.PokemonBallImgWrapper>
          <Image src={몬스터볼} alt="몬스터볼" fill />
        </S.PokemonBallImgWrapper>
        <S.PokemonTitle>{data.name}</S.PokemonTitle>
      </S.PokemonNameWrapper>
      <S.PokemonTitle># {data.number}</S.PokemonTitle>
    </S.PokemonTitleWrapper>
    <S.PokemonImgWrapper>
      <Image src={data.image} alt="리자몽" fill />
    </S.PokemonImgWrapper>
    <S.PokemonTypeWrapper>
      <PokemonTypeCard
        type={data.types[0].type.name}
        sizeDown={true}
        useFilter={false}
      />
      <PokemonTypeCard
        type={data.types[1].type.name}
        sizeDown={true}
        useFilter={false}
      />
    </S.PokemonTypeWrapper>
  </S.PokemonCartWrapper>
);

export default PokemonCard;
