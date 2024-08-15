'use client'

import { createDynamicContext } from './create-dynamic-context'

interface LayoutContextProps {}

const { ContextProvider, useContext } = createDynamicContext<LayoutContextProps>()

export const useLayoutContext = useContext
export const LayoutContextProvider = ContextProvider
