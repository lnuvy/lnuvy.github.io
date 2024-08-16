'use client'

import { ChangeEvent } from 'react'
import { createDynamicContext } from './create-dynamic-context'

interface LayoutContextProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const { ContextProvider, useContext } = createDynamicContext<LayoutContextProps>()

export const useLayoutContext = useContext
export const LayoutContextProvider = ContextProvider
