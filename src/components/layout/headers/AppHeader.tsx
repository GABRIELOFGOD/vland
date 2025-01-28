import React from 'react';
import { LuHotel } from 'react-icons/lu';
import { HeaderList } from '../HeaderList';

export const AppHeader = () => {
  return (
    <div className='text-white flex justify-between md:px-20 px-3 py-2 shadow-sm'>
      <div>
        <LuHotel size={30} />
      </div>
      <HeaderList />
    </div>
  )
}
