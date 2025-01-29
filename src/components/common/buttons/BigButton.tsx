import { IButton } from '@/model/buttonTypes'
import React from 'react'

const BigButton = ({
  text,
  onClick,
  disable,
  color,
  bgColor
}: IButton) => {
  return (
    <button
      className={`w-full h-12 ${bgColor ? bgColor : "bg-primary"} ${color ? color : "text-secondary"} rounded-md font-semibold flex items-center justify-center gap-2`}
      onClick={onClick}
      disabled={disable ?? false}
    >
      {text}
    </button>
  )
}

export default BigButton