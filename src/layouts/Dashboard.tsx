'use client';

import SideBar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import RenderOnClient from '@/helpers/RenderOnClient';
import { ToogleClickEvent } from '@/models/CustomHTMLEvent';
import { Box, CssBaseline } from '@mui/material';
import React, { useState } from 'react';

function DashboardLayout(props: Readonly<{ children: React.ReactNode }>) {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const onSideBarClose = (event: ToogleClickEvent) => {
    setSideBarOpen(event.value);
  };

  return (
    <RenderOnClient>
      <Box display="flex">
        <CssBaseline />
        <TopBar isSideMenuOpen={sideBarOpen} />
        <SideBar open={sideBarOpen} onClose={onSideBarClose} />
      </Box>
      {props.children}
    </RenderOnClient>
  );
}

export default React.memo(DashboardLayout);
