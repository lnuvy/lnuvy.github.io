import React from 'react'
import { ListWrap, Label, Description } from './StackListStyles'
import { Stacks } from '@constant/Stacks'
import SelectBtn from '../../elements/SelectBtn'
import { Stack } from '@typing/Frontend'

const StackList = () => {
  return (
    <ListWrap>
      <ul>
        {Stacks.map((v, i) => (
          <EachStack key={v.id} v={v} />
        ))}
      </ul>
    </ListWrap>
  )
}

const EachStack = ({ v }: { v: Stack }) => {
  return (
    <li>
      <div className="stack-left">
        <div>
          <h3>{v.name}</h3>
          <Label>{v.isPublic ? 'Public' : 'Private'}</Label>
        </div>

        <Description>{v.desc}</Description>
      </div>
      <div className="stack-right">
        <SelectBtn>{}</SelectBtn>
      </div>
    </li>
  )
}

export default StackList
