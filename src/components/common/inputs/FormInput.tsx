import { IInput } from '@/model/InputTypes'
import React from 'react'

const FormInput = ({placeholder, value, type, onChange}: IInput) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='w-full px-2 border border-primary border-opacity-30 h-12 outline-none focus:border-opacity-95 focus:border rounded-md bg-transparent bg-opacity-10'
      />
    </div>
  )
}

export default FormInput