import RankingCard from '.';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'RankingCard',
  component: RankingCard,
} as Meta<typeof RankingCard>;

type Story = StoryObj<typeof RankingCard>;

export const Primary: Story = {
  args: {
    data: {
      isKing: true,
      ranking: 1,
      profileImgUrl:
        'https://i.namu.wiki/i/vjgQc_4iFL9x8_HBZGm1gnPZTaFGGfhWesoHG90cksz39YRCbUGDPlVEKfdgI-6ZWFqpK3bEb25E8m5DxmMVNQ.webp',
      catchCount: '1000',
      userId: '나는야 김경수',
    },
  },
};
