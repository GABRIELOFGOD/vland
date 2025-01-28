"use client"

import { DropDown } from '@/components/common/inputs/DropDown'
import { Input } from '@/components/common/inputs/Input'
import React, { useState } from 'react'

export const HomeHeader = () => {
  const [filter, setFilter] = useState<string>('');
  const [filterBy, setFilterBy] = useState<"name" | "lng-lat" | null>(null);

  console.log(filterBy);
  
  return (
    <div className='flex justify-between text-white md:px-20 px-3'>
      <div className='flex gap-20'>
        <h1 className='text-lg font-semibold my-auto'>VRLAND</h1>
        <div className='w-[300px]'>
          <Input
            placeholder='Filter land by name'
            value={filter}
            type='text'
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <div className='flex gap-5'>
        <p className='my-auto text-sm'>Filter by</p>
        <div className='w-[250px]'>
          <DropDown
            options={['Name', 'Lng-Lat']}
            placeholder='Select filter'
            onChange={(value) => setFilterBy(value === 'Name' ? 'name' : 'lng-lat')}
          />
        </div>
      </div>
    </div>
  )
}
