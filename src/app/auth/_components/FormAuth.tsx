'use client';

import RenderOnClient from '@/helpers/RenderOnClient';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React, { MouseEvent, useState } from 'react';

const FormAuth: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <RenderOnClient>
      <Card sx={{ width: '100vw', maxWidth: '500px' }}>
        <Box my={8}>
          <Typography variant="h3" align="center">
            Welcome!
          </Typography>
        </Box>
        <CardContent component="form">
          <Grid2 container direction="column" spacing={2}>
            <Grid2>
              <TextField
                type="email"
                fullWidth
                id="email_address"
                label="Email Address"
              />
            </Grid2>
            <Grid2>
              <TextField
                fullWidth
                id="password"
                label="password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>
            <Grid2>
              <Button fullWidth variant="contained">
                Login
              </Button>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </RenderOnClient>
  );
};

export default React.memo(FormAuth);
