'use client';

import { DRAWER_WIDTH } from '@/constants/layout-constants';
import IMenuItem from '@/models/IMenuItem';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Link from 'next/link';
import React from 'react';
import Avatar from './Avatar';

const drawerWidth = DRAWER_WIDTH;
const settings: IMenuItem[] = [
  {
    label: 'Account',
    path: '/me/settings',
  },
  {
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'Log Out',
    path: '/',
  },
];

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  width: `calc(100% - ${theme.spacing(7)})`,
  [theme.breakpoints.up('sm')]: !open && {
    width: `calc(100% - ${theme.spacing(8)})`,
  },
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export interface TopBarComponentProps {
  /**
   * State for check sidebar current status
   */
  isSideMenuOpen?: boolean;
}

/**
 * Primary UI component for user Top Bar
 */
export const TopBar: React.FC<TopBarComponentProps> = ({ isSideMenuOpen }) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" open={isSideMenuOpen}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar fullName="Remy Sharp" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.label}
                onClick={handleCloseUserMenu}
                component={Link}
                href={setting.path}
              >
                <Typography textAlign="center">{setting.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(TopBar);
