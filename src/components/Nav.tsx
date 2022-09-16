import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Nav = () => {
  return (
    <Wrap>
      <nav>
        <Link href="/about">안녕</Link>
      </nav>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  //padding: 1rem;
  background: #2d333b;
  padding: 16px 24px;
`

export default Nav
