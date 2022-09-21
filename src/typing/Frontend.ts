import React from 'react'

export interface Stack {
  id: number
  name: string
  isPublic: number
  desc: string
  svg: React.ReactNode | string
  svgName: string
  updated: string
  starred: number
  level: string
}
