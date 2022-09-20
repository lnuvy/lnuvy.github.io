import React, { useState } from 'react'
import { ListWrap, Label, Description, StackInfo } from './StackListStyles'
import { Stacks } from '@constant/Stacks'
import SelectBtn from '../../elements/SelectBtn'
import { Stack } from '@typing/Frontend'
import Star from '../../../public/svg/Star'
import AWS from '../../../public/svg/AWS'

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
  const [isPublic, setIsPublic] = useState(false)

  return (
    <li>
      <div className="stack-left">
        <div>
          <h3>{v.name}</h3>
          <Label>{v.isPublic ? 'Public' : 'Private'}</Label>
        </div>

        <Description>{v.desc}</Description>

        <StackInfo className="flex-start">
          <div className="flex-start" style={{ marginRight: '16px' }}>
            <div
              className="flex-center"
              style={{ width: 16, marginRight: '4px' }}
            >
              {v.svg.includes('/svg/') ? (
                <AWS />
              ) : (
                <img
                  src={v.svg}
                  alt={v.svg}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            {v.svgName}
          </div>
          {v.updated}
        </StackInfo>
      </div>
      <div className="flex-center">
        <SelectBtn padding="3px 12px">
          <div className="flex-center">
            <div className="flex-center" style={{ marginRight: '8px' }}>
              <Star />
            </div>
            {v.level}

            {/*<div*/}
            {/*  className="flex-center"*/}
            {/*  style={{ borderLeft: '1px solid #768390' }}*/}
            {/*>*/}
            {/*<DownArrow />*/}
            {/*</div>*/}
          </div>
        </SelectBtn>
      </div>
    </li>
  )
}

export default React.memo(StackList)
