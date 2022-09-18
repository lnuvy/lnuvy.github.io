import React from 'react'
import styled from '@emotion/styled'

const Footer = () => {
  return (
    <Wrap>
      © 2022. lnuvy <Span>All rights reserved.</Span>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem 0;
  border-top: 1px solid #444c56;
  justify-content: center;
  align-items: center;
`

const Span = styled.span`
  color: rgba(205, 217, 229, 0.5);
  margin: 0 1rem;
`

export default Footer
