'use client';

import Image from 'next/image';

import * as S from './style';
import * as I from '@/asset';

interface RankingCardPros {
  isKing?: boolean;
  ranking: number;
  profileImgUrl: string;
  catchCount: string;
  userId: string;
}

const RankingCard: React.FC<RankingCardPros> = ({
  isKing,
  ranking,
  profileImgUrl,
  catchCount,
  userId,
}) => (
  <S.RankingCardWrapper>
    <S.Ranking>{ranking}</S.Ranking>
    <S.CardContainer>
      <S.ProfileWrapper>
        <S.ProfileImgWrapper>
          <Image
            src={profileImgUrl}
            alt="프로필 사진"
            fill
            sizes="4.75rem 4.75rem"
          />
        </S.ProfileImgWrapper>
        <S.UserId>{userId}</S.UserId>
        <S.CatchTitle>{catchCount}마리 포획</S.CatchTitle>
      </S.ProfileWrapper>
      {isKing && <I.CrownIcon />}
    </S.CardContainer>
  </S.RankingCardWrapper>
);

export default RankingCard;
