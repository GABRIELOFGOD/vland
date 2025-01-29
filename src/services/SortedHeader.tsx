"use client";

import { AppHeader } from '@/components/layout/headers/AppHeader';
import { usePathname } from 'next/navigation';
import React from 'react'

const SortedHeader = () => {
  const currentPath = usePathname();

  const noHeaderPath = ["/login", "/register", "/forgot-password"];
  
  return (
    <div>
      {noHeaderPath.includes(currentPath!) ? <div></div> : <div>
        <AppHeader />
        <hr />
        </div>}
    </div>
  )
}

export default SortedHeader