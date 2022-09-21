import React, { useState } from 'react'
import styled from '@emotion/styled'
import StackList from '@components/StackList'

const Stacks = () => {
  const [typeModalOpen, setTypeModalOpen] = useState(false)

  return (
    <Wrap id="Stacks">
      <br />
      <h2>📚 Stacks.</h2>

      {/*<ButtonBox>*/}
      {/*  <SelectBtn*/}
      {/*    padding="5px 16px"*/}
      {/*    pointer*/}
      {/*    onClick={() => setTypeModalOpen(!typeModalOpen)}*/}
      {/*  >*/}
      {/*    <div className="flex-center">*/}
      {/*      <span style={{ marginRight: '4px' }}>Type</span> <DownArrow />*/}
      {/*    </div>*/}
      {/*  </SelectBtn>*/}

      {/*  <SelectBtn padding="5px 16px" pointer>*/}
      {/*    Language*/}
      {/*  </SelectBtn>*/}
      {/*</ButtonBox>*/}

      <StackList />
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 1rem 0;
`

const ButtonBox = styled.div`
  display: flex;
  gap: 4px;
`

export default Stacks
