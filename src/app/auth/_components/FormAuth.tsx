'use client';

import TextField from '@/components/inputs/TextField';
import RenderOnClient from '@/helpers/RenderOnClient';
import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import NavigateLink from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

interface FormAuthProps {
  variant: 'login' | 'register';
}

const FormAuth: React.FC<FormAuthProps> = ({ variant }) => {
  const router = useRouter();

  const generatePaths = useCallback(() => {
    const paths = {
      login: '/auth/register',
      register: '/auth/login',
    };

    return paths[variant];
  }, [variant]);

  const submit = useCallback(() => {
    router.push('/dashboard');
  }, [router]);

  return (
    <RenderOnClient>
      <Card sx={{ width: '100vw', maxWidth: '500px' }}>
        <Box my={8}>
          <Typography variant="h3" align="center">
            Welcome!
          </Typography>
        </Box>
        <CardContent component="form">
          <Grid2 container spacing={2}>
            {variant === 'register' && (
              <>
                <Grid2 xs={6}>
                  <TextField type="text" id="first_name" label="First Name" />
                </Grid2>
                <Grid2 xs={6}>
                  <TextField type="text" id="last_name" label="Last Name" />
                </Grid2>
              </>
            )}
            <Grid2 xs={12}>
              <TextField
                type="email"
                id="email_address"
                label="Email Address"
              />
            </Grid2>
            <Grid2 xs>
              <TextField type="password" id="password" label="Password" />
            </Grid2>
            {variant === 'register' && (
              <Grid2 xs={12}>
                <TextField
                  type="password"
                  id="confirm_password"
                  label="Confirm Password"
                />
              </Grid2>
            )}
            <Grid2 xs={12}>
              <Button
                fullWidth
                variant="contained"
                type="button"
                onClick={submit}
              >
                {variant === 'register' ? 'Register' : 'Login'}
              </Button>
            </Grid2>
            <Grid2 textAlign="center" xs={12}>
              <Link component={NavigateLink} href={generatePaths()}>
                {variant === 'register' ? 'Login' : 'Create Account'}
              </Link>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </RenderOnClient>
  );
};

export default React.memo(FormAuth);
