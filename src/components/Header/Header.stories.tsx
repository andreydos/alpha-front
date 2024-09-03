import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unauthorized: Story = {};

export const Authorized: Story = {
  args: {
    session: 'fake_storybook_session'
  }
};