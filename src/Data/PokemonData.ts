import { PokemonInfoType } from '@/types';

export const PokemonDummyData: PokemonInfoType[] = [
  {
    data: {
      name: '망나뇽',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
      number: 149,
      types: [
        {
          type: {
            name: '드래곤',
          },
        },
        {
          type: {
            name: '비행',
          },
        },
      ],
      flavorText:
        '바다의 화신이라고 불린다.\n망나뇽 형태의 조각상을\n뱃머리에 두는 배도 많다.',
      genera: '드래곤포켓몬',
    },
  },
  {
    data: {
      name: '골덕',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
      number: 55,
      types: [
        {
          type: {
            name: '물',
          },
        },
      ],
      flavorText:
        '강을 더럽힌 사람을 물속으로\n끌어들여 데려간다는\n옛날이야기가 전해져 오고 있다.',
      genera: '오리포켓몬',
    },
  },
  {
    data: {
      name: '쥬레곤',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
      number: 87,
      types: [
        {
          type: {
            name: '물',
          },
        },
        {
          type: {
            name: '얼음',
          },
        },
      ],
      flavorText:
        '온몸이 눈처럼 새하얗다.\n추위에 강해 얼음이 떠 있는\n바다도 기운차게 헤엄쳐 다닌다.',
      genera: '강치포켓몬',
    },
  },
];
