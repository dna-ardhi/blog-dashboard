'use client';

import { useEffect, useState } from 'react';

function RenderOnClient(props: Readonly<{ children: React.ReactNode }>) {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && props.children;
}

export default RenderOnClient;
