import React from 'react'
import { ListWrap, Label, Description } from './StackListStyles'
import { Stacks } from '@constant/Stacks'

const StackList = () => {
  return (
    <ListWrap>
      <ul>
        {Stacks.map((v, i) => {
          return (
            <li key={v.id}>
              <div className="stack-left">
                <div>
                  <h3>{v.name}</h3>
                  <Label>{v.isPublic ? 'Public' : 'Private'}</Label>
                </div>

                <Description>{v.desc}</Description>
              </div>
            </li>
          )
        })}

        <li>안녕</li>
      </ul>
    </ListWrap>
  )
}

export default StackList
