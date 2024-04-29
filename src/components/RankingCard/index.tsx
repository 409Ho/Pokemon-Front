'use client';

import Image from 'next/image';

import { RankingCardPros } from '@/types';

import * as S from './style';
import * as I from '@/asset';

const RankingCard: React.FC<RankingCardPros> = ({ data }) => (
  <S.RankingCardWrapper>
    <S.Ranking>{data.ranking}</S.Ranking>
    <S.CardContainer>
      <S.ProfileWrapper>
        <S.ProfileImgWrapper>
          <Image
            src={data.profileImgUrl}
            alt="프로필 사진"
            fill
            sizes="4.75rem 4.75rem"
            unoptimized
          />
        </S.ProfileImgWrapper>
        <S.UserId>{data.userId}</S.UserId>
        <S.CatchTitle>{data.catchCount}마리 포획</S.CatchTitle>
      </S.ProfileWrapper>
      {data.isKing && <I.CrownIcon />}
    </S.CardContainer>
  </S.RankingCardWrapper>
);

export default RankingCard;
