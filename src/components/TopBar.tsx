'use client';

import { DRAWER_WIDTH } from '@/constants/layout-constants';
import TopBarComponentProps from '@/models/TopBarComponentProps';
import { styled, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React from 'react';

const drawerWidth = DRAWER_WIDTH;

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

function TopBar(props: Readonly<TopBarComponentProps>) {
  const { isSideMenuOpen } = props;

  return (
    <AppBar position="fixed" open={isSideMenuOpen}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(TopBar);
