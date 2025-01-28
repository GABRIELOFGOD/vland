import { IProperty } from '@/model/propertyTypes'
import { formatMoney } from '@/services/moneyEditor'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaMoneyBill1 } from 'react-icons/fa6'

export const PropertyCard = ({ property }: {property: IProperty}) => {
  const image = "/images/land.jpg"
  
  return (
    <div className='text-white w-[200px]'>
      <div className='w-[200px] h-[150px] bg-gray-200 overflow-hidden'>
        <div className='hover:scale-110 duration-200 w-full h-full relative'>
          <Image
            src={image}
            alt={property.name}
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='w-full'>
        <p className='text-lg font-semibold text-primary'>{property.name}</p>
        <div className='flex justify-between'>
          <div className="flex gap-2">
            <FaStar size={15} className='my-auto' />
            <p className='text-sm my-auto'>{property.rating}</p>
          </div>
          <div className="flex gap-2">
            <FaMoneyBill1 size={15} className='my-auto' />
            <p className='text-sm my-auto font-semibold text-primary'>${formatMoney(property.price)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
