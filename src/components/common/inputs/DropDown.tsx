"use client"

import React from 'react'
import { IoIosArrowDropdown } from 'react-icons/io';

interface DropDownProps {
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

export const DropDown = ({ options, placeholder, onChange }: DropDownProps) => {
  return (
    <div className='relative'>
      <select 
        className='w-full px-2 text-secondary border-none focus:border-primary border-opacity-30 h-8 outline-none focus:border-opacity-95 focus:border rounded-md bg-primary bg-opacity-10 cursor-pointer appearance-none'
        onChange={(e) => onChange(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <IoIosArrowDropdown className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none' />
    </div>
  )
}

DropDown.defaultProps = {
  options: [],
  placeholder: 'Select an option',
  onChange: () => {},
};
