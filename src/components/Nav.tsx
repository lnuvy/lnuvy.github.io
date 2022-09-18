import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Nav = () => {
  return (
    <Wrap>
      <nav>
        <Link href="/about">
          <Title>l</Title>
        </Link>
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

const Title = styled.h2`
  margin: 0;
  cursor: pointer;
`

export default Nav
