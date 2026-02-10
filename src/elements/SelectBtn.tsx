import React from 'react'
import clsx from 'clsx'

interface BtnProps {
  padding: string
  pointer?: boolean
  mini?: boolean
  wide?: boolean
  className?: string
}

interface BtnType extends BtnProps {
  children: React.ReactNode
  onClick?: () => void
}

const SelectBtn = ({ children, padding, pointer, mini, wide, onClick, className }: BtnType) => {
  return (
    <button
      onClick={onClick}
      style={{ padding }}
      className={clsx(
        'flex justify-center items-center rounded-md border border-background-2 bg-background-1 text-text-2 font-medium leading-5 whitespace-nowrap align-middle transition-colors',
        'hover:bg-background-3',
        pointer && 'cursor-pointer',
        mini ? 'text-xs' : 'text-sm',
        wide && 'flex-1',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default SelectBtn
