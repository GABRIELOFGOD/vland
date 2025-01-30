import React from 'react'
import { Side } from './Side'
import { HomeHeader } from '../headers/HomeHeader'
// import { HomePropertyDisplay } from './HomePropertyDisplay'
import HexGridComponent from '../Hex/HexTiles'

export const HomePage = () => {
  return (
    <div className='mt-2 flex flex-col gap-5'>
      <HomeHeader />
      <div className='flex h-[85vh] w-full'>
        <div className='w-[300px] p-3'>
          <Side />
        </div>
        <div className='w-full p-3 h-full flex flex-col gap-3 text-white'>
          <div className="flex justify-between font-semibold">
            <p>Task info</p>
            <p>Tags</p>
            <p>Round status</p>
            <div className="flex gap-5">
              <p>Reward</p>
              <p>Token</p>
              <p>Menu</p>
              <p>Run</p>
            </div>
          </div>
          <hr />
          {/* <HomePropertyDisplay /> */}
          <HexGridComponent />
        </div>
      </div>
    </div>
  )
}
