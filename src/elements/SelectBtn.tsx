import React from 'react'
import styled from '@emotion/styled'

type BtnType = {
  children: React.ReactNode
  padding: string
  pointer?: boolean | any
  mini?: boolean | any
}

const SelectBtn = ({ children, padding, pointer, mini }: BtnType) => {
  return (
    <Button padding={padding} pointer={pointer} mini={mini}>
      {children}
    </Button>
  )
}

type BtnProps = {
  padding: string
  pointer: boolean
  mini: boolean
}

const Button = styled.button<BtnProps>`
  ${({ pointer }) => pointer && 'cursor: pointer;'}
  padding: ${({ padding }) => padding};
  font-size: ${({ mini }) => (mini ? '12px;' : '14px')};
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.palette.background2};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text4};
`

export default SelectBtn
