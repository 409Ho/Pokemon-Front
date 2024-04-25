import PokemonTypeCard from '.';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'PokemonTypeCard',
  component: PokemonTypeCard,
} as Meta<typeof PokemonTypeCard>;

type Story = StoryObj<typeof PokemonTypeCard>;

export const Primary: Story = {
  args: {
    type: '강철',
  },
};
