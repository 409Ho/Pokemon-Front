'use client';

import { PokemonType } from '@/types';

import * as I from '@/asset';
import * as S from './style';

type PokemonTypeCardProps = PokemonType;

const typeObj: { [key: string]: JSX.Element } = {
  강철: <I.강철타입 />,
  격투: <I.격투타입 />,
  고스트: <I.고스트타입 />,
  노말: <I.노말타입 />,
  독: <I.독타입 />,
  드래곤: <I.드래곤타입 />,
  땅: <I.땅타입 />,
  물: <I.물타입 />,
  바위: <I.바위타입 />,
  벌레: <I.벌레타입 />,
  비행: <I.비행타입 />,
  불꽃: <I.불꽃타입 />,
  악: <I.악타입 />,
  얼음: <I.얼음타입 />,
  에스퍼: <I.에스퍼타입 />,
  전기: <I.전기타입 />,
  페어리: <I.페어리타입 />,
  풀: <I.풀타입 />,
};

const PokemonTypeCard: React.FC<PokemonTypeCardProps> = ({ type }) => (
  <S.TypeCardWrapper type={type}>
    {typeObj[type]}
    <p>{type}</p>
  </S.TypeCardWrapper>
);

export default PokemonTypeCard;
