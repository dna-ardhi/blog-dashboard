import { AttributeField, AttributeTable } from '@/components/AttributeTable';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof AttributeTable> = {
  title: 'Data Display / Attribute Table',
  component: AttributeTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AttributeTable>;

const DUMMYFIELDS: AttributeField[] = [
  {
    key: 'username',
    label: 'Username',
  },
  {
    key: 'email_address',
    label: 'Email Address',
  },
  {
    key: 'full_name',
    label: 'Full Name',
  },
  {
    key: 'role',
    label: 'Role',
    description: 'Specification of your Authorization',
  },
];

const DUMMYDATA = {
  username: '@jhondoe',
  email_address: 'jhondoe@mail.com',
  full_name: 'Jhon Doe',
  role: 'Admin',
};

export const Basic: Story = {
  args: {
    title: 'Judul',
    subtitle: 'Sub Judul',
    fields: DUMMYFIELDS,
    data: DUMMYDATA,
  },
  render: (args) => (
    <div style={{ width: '800px' }}>
      <AttributeTable {...args} />
    </div>
  ),
};
