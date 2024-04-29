import MainPage from '.';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'MainPage',
  component: MainPage,
} as Meta<typeof MainPage>;

type Stroy = StoryObj<typeof MainPage>;

export const Primary: Stroy = {};
