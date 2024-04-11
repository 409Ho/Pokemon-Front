import PrimaryButton from '.';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'PrimaryButton',
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  args: {
    isFill: true,
    size: '29.9375rem',
    children: '로그인',
  },
};
