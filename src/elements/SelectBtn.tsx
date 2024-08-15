import React from 'react'
import styled from '@emotion/styled'

interface BtnProps {
  padding: string
  pointer?: boolean
  mini?: boolean
  wide?: boolean
}

interface BtnType extends BtnProps {
  children: React.ReactNode
  onClick?: () => void
}

const SelectBtn = ({ children, padding, pointer, mini, wide, onClick }: BtnType) => {
  return (
    <Button padding={padding} pointer={pointer} mini={mini} wide={wide} onClick={onClick}>
      {children}
    </Button>
  )
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
  color: ${({ theme }) => theme.palette.text2};

  display: flex;
  justify-content: center;
  align-items: center;
  ${({ wide }) => wide && 'flex: 1;'}
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.background3};
    /* border-color: ${({ theme }) => theme.palette.background4}; */
  }
`

export default SelectBtn
