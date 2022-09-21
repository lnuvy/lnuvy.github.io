import React from 'react'
import styled from '@emotion/styled'
import Test from './my-mdx-page.mdx'
import MarkdownView from '@components/markdown'

const Experience = () => {
  return (
    <Wrap id="Experience">
      <br />
      <h2>🧑‍💻 Experience.</h2>
      <br />
    </Wrap>
  )
}

const Wrap = styled.div`
  min-height: 100vh;
  padding: 1rem 0;
`

export default Experience
