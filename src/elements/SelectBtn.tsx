import React from 'react'
import styled from '@emotion/styled'

type BtnType = {
  children: React.ReactNode
  padding: string
  pointer?: boolean | any
  mini?: boolean | any
  onClick?: () => void
}

const SelectBtn = ({ children, padding, pointer, mini, onClick }: BtnType) => {
  return (
    <Button padding={padding} pointer={pointer} mini={mini} onClick={onClick}>
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

  &:hover {
    background-color: ${({ theme }) => theme.palette.background3};
    border-color: ${({ theme }) => theme.palette.background4};
  }
`

export default SelectBtn
