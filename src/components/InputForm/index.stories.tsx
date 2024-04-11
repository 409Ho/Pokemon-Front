import InputForm from '.';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'InputForm',
  component: InputForm,
} as Meta<typeof InputForm>;

type Story = StoryObj<typeof InputForm>;

export const Primary: Story = {
  args: {
    isButton: false,
    width: '28.875rem',
    inputTitle: '비밀번호',
  },
};
