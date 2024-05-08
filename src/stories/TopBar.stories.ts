import { TopBar } from '@/components/TopBar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TopBar> = {
  title: 'Surfaces / Top Bar',
  component: TopBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const Basic: Story = {
  args: {
    isSideMenuOpen: false,
  },
};
