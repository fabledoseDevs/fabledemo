import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  component: Separator,
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Small: Story = {
  args: {
    type: 'SMALL',
  },
};

export const Medium: Story = {
  args: {
    type: 'MEDIUM',
  },
};
