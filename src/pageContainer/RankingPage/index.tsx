'use client';

import { Header, RankingCard } from '@/components';
import { RankingArr } from '@/Test';

import * as I from '@/asset';
import * as S from './style';

const RankingPage = () => (
  <S.PageWrapper>
    <Header />
    <S.PageContentWrapper>
      <div>
        <S.subTitle>TOP 1 ~ 30</S.subTitle>
        <S.PageTitleWrapper>
          <S.Title>유저 랭킹</S.Title> <I.TrophyIcon />
        </S.PageTitleWrapper>
      </div>
      <S.RankCardWrapper>
        {RankingArr.map((info, index) => (
          <RankingCard data={info.data} key={index} />
        ))}
      </S.RankCardWrapper>
    </S.PageContentWrapper>
  </S.PageWrapper>
);

export default RankingPage;
