import React from 'react'
import styled from '@emotion/styled'

const SelectBtn = ({ children }: string | any) => {
  return <Button>{children}</Button>
}

const Button = styled.button`
  cursor: pointer;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid;
`

export default SelectBtn
