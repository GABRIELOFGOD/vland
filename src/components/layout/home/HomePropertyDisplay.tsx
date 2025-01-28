"use client";

import { PropertyCard } from '@/components/features/PropertyCard';
import useProperty from '@/hooks/useProperty'
import React, { useEffect } from 'react'

export const HomePropertyDisplay = () => {
  const url = "../data/properties.json";
  
  const {
    error,
    loading,
    properties
  } = useProperty(url);

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
