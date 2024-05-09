import { Avatar } from '@/components/dataDisplay/Avatar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display / Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fullName: {
      control: 'text',
    },
    alt: {
      control: 'text',
      description:
        'Used in combination with `src` or `srcSet` to provide an alt attribute for the rendered img element.',
    },
    src: {
      control: 'text',
      description: 'The `src` attribute for the `img` element.',
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
      description: 'The shape of the avatar.',
      type: {
        name: 'union',
        required: false,
        value: [
          { name: 'other', value: 'circular' },
          { name: 'other', value: 'rounded' },
          { name: 'other', value: 'square' },
        ],
      },
      table: {
        defaultValue: {
          summary: 'circular',
        },
        type: {
          summary: 'variant',
          detail: 'circular | rounded | square',
        },
      },
    },
  },
  args: {
    variant: 'circular',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  args: {
    fullName: 'Jhon Doe',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-JmDfLz7ErRiTZ9vIme55A9JGQqdx8qJ_xQ_lB2UIqGAFELpsKQQ8xuTSrlqrly-tSQ&usqp=CAU',
    alt: 'Jhon Doe',
  },
};

export const Initial: Story = {
  args: {
    fullName: 'Jhon Doe',
  },
};
