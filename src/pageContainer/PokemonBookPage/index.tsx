'use client';

import { useState } from 'react';

import { PokemonTypeCard, Header } from '@/components';
import { PokemonType } from '@/types';
import { PokemonDummyData } from '@/data';

import * as S from './style';
import * as I from '@/asset';
import PokemonCard from '@/components/PokmonCard';

const PokemonBookPage = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const PokemonTypeArr: PokemonType[] = [
    '노말',
    '불꽃',
    '물',
    '풀',
    '전기',
    '얼음',
    '격투',
    '독',
    '땅',
    '비행',
    '에스퍼',
    '벌레',
    '바위',
    '고스트',
    '드래곤',
    '악',
    '강철',
    '페어리',
  ];

  return (
    <S.PageWrapper>
      <Header />
      <S.PageContentWrapper>
        <S.PageTitle>포켓몬 도감</S.PageTitle>
        <S.SearchInputWrapper>
          <S.SearchInput placeholder="찾고 싶은 포켓몬의 이름을 적어주세요 ." />
          <S.IconWrapper onClick={() => setOpenFilter(prev => !prev)}>
            <I.FilterIcon />
          </S.IconWrapper>
        </S.SearchInputWrapper>
      </S.PageContentWrapper>
      {openFilter && (
        <S.PokemonTypeWrapper>
          {PokemonTypeArr.map(type => (
            <PokemonTypeCard type={type} useFilter={true} key={type} />
          ))}
        </S.PokemonTypeWrapper>
      )}
      <S.PokemonCardWrapper>
        {PokemonDummyData.map((pokemonInfo, index) => (
          <PokemonCard data={pokemonInfo.data} key={index} />
        ))}
      </S.PokemonCardWrapper>
    </S.PageWrapper>
  );
};

export default PokemonBookPage;
