"use client";

import { PropertyCard } from '@/components/features/PropertyCard';
import useProperty from '@/hooks/useProperty'
import React, { useEffect } from 'react'

export const HomePropertyDisplay = () => {
  
  const {
    properties
  } = useProperty();

  useEffect(() => {
    console.log(properties);
  }, [properties]);
  
  return (
    <div className='flex flex-wrap gap-5 justify-evenly'>
      {properties.map((property, i) => (
        <PropertyCard
          key={i}
          property={property}
        />
      ))}
    </div>
  )
}
