import PokemonBookPage from '.';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'PokemonBookPage',
  component: PokemonBookPage,
} as Meta<typeof PokemonBookPage>;

type Story = StoryObj<typeof PokemonBookPage>;

export const Primary: Story = {};
