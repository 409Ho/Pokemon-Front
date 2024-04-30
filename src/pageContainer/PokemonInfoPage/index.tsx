'use client';

import Image from 'next/image';

import { PokemonDummyData } from '@/Test';

import * as I from '@/asset';
import * as S from './style';
import { PokemonTypeCard } from '@/components';

const PokemonInfoPage = () => (
  <S.PageWrapper>
    <S.ShowPokemonContainer>
      <S.IconWrapper>
        <I.ArrowIcon />
      </S.IconWrapper>
      <S.LargeCircle>
        <S.SmallCircle />
      </S.LargeCircle>
      <S.ImgWrapper>
        <Image
          src={PokemonDummyData[1].data.image}
          alt="포켓몬사진"
          fill
          sizes="15.625rem 15.625rem"
          unoptimized
        />
      </S.ImgWrapper>
    </S.ShowPokemonContainer>
    <S.PokemonInfoContainer>
      <S.InfoWrapper>
        <S.flexBox>
          <S.PokemonNumber>
            NO.{PokemonDummyData[0].data.number}
          </S.PokemonNumber>
          <S.PokemonCount>잡은횟수 : 3</S.PokemonCount>
        </S.flexBox>
        <S.flexBox>
          {PokemonDummyData[0].data.types.map((type, index) => (
            <PokemonTypeCard type={type.type.name} key={index} />
          ))}
        </S.flexBox>
        <S.PokemonName>{PokemonDummyData[0].data.name}</S.PokemonName>
        <S.FlavorTextBox>{PokemonDummyData[0].data.flavorText}</S.FlavorTextBox>
      </S.InfoWrapper>
    </S.PokemonInfoContainer>
  </S.PageWrapper>
);

export default PokemonInfoPage;
