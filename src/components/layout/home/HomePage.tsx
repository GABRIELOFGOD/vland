import React from 'react'
import { Side } from './Side'
import { HomeHeader } from '../headers/HomeHeader'
// import { HomePropertyDisplay } from './HomePropertyDisplay'
import HexGridComponent from '../Hex/HexTiles'

export const HomePage = () => {
  return (
    <div className='mt-2 flex flex-col gap-5'>
      <HomeHeader />
      <div className='flex h-[85vh] w-full border-2 border-gray-200'>
        <div className='flex-1 p-3'>
          <Side />
        </div>
        <div className='flex-[6] p-3 h-full'>
          {/* <HomePropertyDisplay /> */}
          <HexGridComponent />
        </div>
      </div>
    </div>
  )
}
