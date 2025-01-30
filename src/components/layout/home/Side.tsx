"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPlus, FaRegUserCircle } from 'react-icons/fa'
import { GoPeople } from 'react-icons/go'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

export const Side = () => {
  const [userWallet, setUserWallet] = useState<string>('0x12hjyugu32748198cy8by834865764c');
  const [userReferral, setUserReferral] = useState<string>('0x12hjyugu');

  useEffect(() => {
    setUserWallet("0x12hjyugu32748198cy8by834865764c");
    setUserReferral("0x12hjyugu");
  }, []);
  
  return (
    <div className='flex flex-col gap-3 h-full'>
      <div className='bg-grad bg-opacity-70 p-3 w-full justify-center flex items-center flex-col'>
        <FaRegUserCircle className='text-primary' />
        <h1 className='text-primary text-lg'>Username</h1>
        <p className='text-gray-200 text-sm'>user position</p>
      </div>

      <div className='bg-grad bg-opacity-70 p-3 w-full'>
        <p className='text-primary text-xs'>User Balance</p>
        <h1 className='text-gray-100 font-semibold text-lg'>100</h1>
        <p className='text-gray-200 text-sm'>in USDT</p>
      </div>

      <div className='bg-grad bg-opacity-70 p-3 w-full'>
        <p className='text-primary text-xs'>User Property</p>
        <div className='p-2 bg-grad rounded-md flex flex-col'>
          <Link href="" className='text-primary font-bold hover:underline'>10 <span className='text-white text-sm font-normal'>land owned</span></Link>
          <Link href="" className='text-primary font-bold hover:underline'>6 <span className='text-white text-sm font-normal'>NFT owned</span></Link>
        </div>
      </div>

      <div>
        <button className='bg-primary bg-opacity rounded-md p-3 w-full flex justify-center items-center'>
          <FaPlus className='text-secondary' />
        </button>
      </div>

      <div className="flex">
        <div className='bg-grad bg-opacity-70 p-3 rounded-l-md'>
          <MdOutlineAccountBalanceWallet className='text-white text-xl my-auto' />
        </div>
        <div className='bg-transparent bg-opacity-10 p-3 w-full rounded-r-md border border-opacity-20 border-white'>
          <input
            type="text"
            disabled
            value={userWallet}
            className='w-full bg-transparent text-gray-200'
          />
        </div>
      </div>

      <div className="flex">
        <div className='bg-grad bg-opacity-70 p-3 rounded-l-md flex w-full gap-2'>
          <GoPeople className='text-white text-sm my-auto' />
          <p className='text-sm my-auto text-white'>Referral</p>
        </div>
        <div className='bg-transparent bg-opacity-10 p-3 w-full rounded-r-md border border-opacity-20 border-white'>
          <input
            type="text"
            disabled
            value={userReferral}
            className='w-full bg-transparent text-gray-200 outline-none border-none'
          />
        </div>
      </div>
    </div>
  )
}
