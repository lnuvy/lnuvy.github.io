import React from 'react'
import styled from '@emotion/styled'
import StackList from '@components/StackList'

const Stacks = () => {
  return (
    <Wrap id="Stacks">
      <br />
      <h2>📚 Stacks.</h2>
      <br />
      <StackList />
    </Wrap>
  )
}

const Wrap = styled.div`
  min-height: 100vh;
`

export default Stacks
