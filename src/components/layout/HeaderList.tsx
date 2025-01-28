"use client"

import { headerList } from '@/utils/headerConstants'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export const HeaderList = () => {
  const currentPath = usePathname();

  return (
    <div className='flex gap-5'>
      {headerList.map((header) => (
        <Link 
          href={header.path} 
          key={header.id} 
          className={`flex items-center gap-2 hover:text-primary ${currentPath === header.path ? 'text-primary font-semibold' : ''}`}
        >
          <div>{header.icon}</div>
          <p className='text-sm'>{header.name}</p>
        </Link>
      ))}
    </div>
  )
}
