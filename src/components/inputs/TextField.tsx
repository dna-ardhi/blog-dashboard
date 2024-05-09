'use client';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import React, { MouseEvent, useState } from 'react';

export const TextField: React.FC<MuiTextFieldProps> = ({
  fullWidth = true,
  type,
  InputProps,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleToggleShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <MuiTextField
      type={type === 'password' && showPassword ? 'text' : type}
      fullWidth={fullWidth}
      InputProps={
        type === 'password'
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleToggleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              ...InputProps,
            }
          : InputProps
      }
      {...props}
    />
  );
};

export default React.memo(TextField);
