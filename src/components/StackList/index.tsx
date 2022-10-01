import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ListWrap, Label, Description, StackInfo } from './StackListStyles'
import { StacksArray } from '@constant/StacksArray'
import SelectBtn from '../../elements/SelectBtn'
import { Stack } from '@typing/Frontend'
import Star from 'public/svg/Star'
import FillStar from 'public/svg/FillStar'

const StackList = () => {
  return (
    <ListWrap>
      <ul>
        {StacksArray.map((v, i) => (
          <EachStack key={v.id} v={v} />
        ))}
      </ul>
    </ListWrap>
  )
}

const EachStack = ({ v }: { v: Stack }) => {
  const [isPublic, setIsPublic] = useState(false)
  const [isStar, setIsStar] = useState(false)

  useEffect(() => {
    setIsPublic(v.isPublic === 1)
    setIsStar(v.starred === 1)
  }, [v])

  return (
    <li>
      <div className="each-stack-top">
        <div className="stack-left">
          <div>
            <h3 onClick={() => setIsPublic(!isPublic)}>{v.name}</h3>
            <Label>{isPublic ? 'Public' : 'Private'}</Label>
          </div>

          <Description>{v.desc}</Description>
        </div>

        <div className="flex-center">
          <SelectBtn
            padding="3px 12px"
            mini
            pointer
            onClick={() => setIsStar(!isStar)}
          >
            <div className="flex-center">
              <div className="flex-center" style={{ marginRight: '8px' }}>
                {isStar ? <FillStar /> : <Star />}
              </div>
              {/*{v.level} 레벨 적는거 비추천이라고 함*/}
              {isStar ? 'Starred' : 'Star'}
            </div>
          </SelectBtn>
        </div>
      </div>
      <div>
        <StackInfo className="flex-start">
          <div className="flex-start" style={{ marginRight: '16px' }}>
            <div
              className="flex-center"
              style={{ width: 16, marginRight: '4px' }}
            >
              {typeof v.svg === 'string' ? (
                <Image
                  src={v.svg}
                  alt={v.svg}
                  width={16}
                  height={16}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                v.svg
              )}
            </div>
            {v.svgName}
          </div>
          {v.updated}
        </StackInfo>
      </div>
    </li>
  )
}

export default React.memo(StackList)
