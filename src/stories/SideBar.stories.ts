import { SideBar } from '@/components/SideBar';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof SideBar> = {
  title: 'Surfaces / Side Bar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        disable: true,
      },
      description: 'render content here',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Basic: Story = {
  args: {
    onClose: fn(),
    open: true,
  },
};
