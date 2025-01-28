import React from 'react'
import { Side } from './Side'
import { HomeHeader } from '../headers/HomeHeader'
import { HomePropertyDisplay } from './HomePropertyDisplay'

export const HomePage = () => {
  return (
    <div className='mt-2 flex flex-col gap-5'>
      <HomeHeader />
      <div className='flex'>
        <div className='flex-1 p-3'>
          <Side />
        </div>
        <div className='flex-[6] p-3'>
          <HomePropertyDisplay />
        </div>
      </div>
    </div>
  )
}
