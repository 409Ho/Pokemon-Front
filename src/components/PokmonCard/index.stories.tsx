import PokemonCard from '.';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'PokemonCard',
  component: PokemonCard,
} as Meta<typeof PokemonCard>;

type Story = StoryObj<typeof PokemonCard>;

export const Primary: Story = {
  args: {
    data: {
      name: '데구리',
      number: 75,
      types: [
        {
          type: {
            name: '강철',
          },
        },
        {
          type: {
            name: '고스트',
          },
        },
      ],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
      flavorText: 'e',
      genera: 'd',
    },
  },
};
