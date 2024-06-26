import Button from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Test',
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: '로그인',
  },
};
