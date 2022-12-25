import React from 'react'
import styled from '@emotion/styled'
import { CompanyArray } from '@constant/CompanyArray'
import ExpBox from '@components/ExpBox'

const Experience = () => {
  return (
    <Wrap id="Experience">
      <br />
      <h2>🧑‍💻 Experience.</h2>
      <br />

      {CompanyArray.map((company) => (
        <ExpBox key={company.id} company={company} />
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  //min-height: 100vh;
  padding: 1rem 0;
`

export default Experience
