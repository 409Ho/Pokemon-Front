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
          <Image src={몬스터볼} alt="몬스터볼" fill sizes="1.75rem 1.5625rem" />
        </S.PokemonBallImgWrapper>
        <S.PokemonTitle>{data.name}</S.PokemonTitle>
      </S.PokemonNameWrapper>
      <S.PokemonTitle># {data.number}</S.PokemonTitle>
    </S.PokemonTitleWrapper>
    <S.PokemonImgWrapper>
      <Image
        src={data.image}
        alt="리자몽"
        fill
        unoptimized
        sizes="6.75rem 6.75rem"
      />
    </S.PokemonImgWrapper>
    <S.PokemonTypeWrapper>
      {data.types.map((type, index) => (
        <PokemonTypeCard
          type={type.type.name}
          sizeDown={true}
          useFilter={false}
          key={index}
        />
      ))}
    </S.PokemonTypeWrapper>
  </S.PokemonCartWrapper>
);

export default PokemonCard;
