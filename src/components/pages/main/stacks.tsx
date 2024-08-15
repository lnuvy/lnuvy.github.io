import styled from '@emotion/styled'
import StackList from '@components/stack-list'

const Stacks = () => {
  return (
    <Wrap id="Stacks">
      <br />
      <h2>📚 Stacks.</h2>

      <StackList />
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 1rem 0;
`

export default Stacks
