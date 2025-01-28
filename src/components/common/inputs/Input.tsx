import { IInput } from '@/model/InputTypes'
import React from 'react'

export const Input = ({placeholder, value, type, onChange}: IInput) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='w-full px-2 border-none focus:border-primary border-opacity-30 h-8 outline-none focus:border-opacity-95 focus:border rounded-md bg-primary bg-opacity-10'
      />
    </div>
  )
}
