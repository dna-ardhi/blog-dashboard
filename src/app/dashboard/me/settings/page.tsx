import AttributeTable, { AttributeField } from '@/components/AttributeTable';
import { Container, Typography } from '@mui/material';

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

export default function settings() {
  return (
    <Container maxWidth="lg">
      <Typography sx={{ mb: 3 }} variant="h2" component="h2">
        Me //
      </Typography>
      <AttributeTable
        title="Settings"
        subtitle="account"
        fields={DUMMYFIELDS}
        data={DUMMYDATA}
      />
    </Container>
  );
}
