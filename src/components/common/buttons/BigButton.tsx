import { IButton } from '@/model/buttonTypes'
import React from 'react'

const BigButton = ({
  text,
  onClick,
  disable
}: IButton) => {
  return (
    <button
      className='w-full h-12 bg-primary text-secondary rounded-md font-semibold flex items-center justify-center gap-2'
      onClick={onClick}
      disabled={disable ?? false}
    >
      {text}
    </button>
  )
}

export default BigButton