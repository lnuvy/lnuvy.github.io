import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import OptionalLink from '@components/common/optional-link'
import { stacksArray } from '@constant/stacks-array'
import { Stack } from '@typing/front'
import FillStar from 'public/svg/FillStar'
import Star from 'public/svg/Star'
import SelectBtn from '../../elements/SelectBtn'

const StackList = () => {
  return (
    <div className="px-2 mx-auto">
      <ul className="p-0">
        {stacksArray.map((stack) => (
          <EachStack key={stack.id} stack={stack} />
        ))}
      </ul>
    </div>
  )
}

const EachStack = ({ stack }: { stack: Stack }) => {
  const [isPublic, setIsPublic] = useState(false)
  const [isStar, setIsStar] = useState(false)

  useEffect(() => {
    setIsPublic(stack.isPublic === 1)
    setIsStar(stack.starred === 1)
  }, [stack])

  return (
    <li className="w-full flex flex-col py-8 border-t border-border-color last:border-b last:border-solid">
      <div className="flex flex-row justify-between">
        <div className="w-[80%]">
          <div className="mb-1 flex">
            <h3
              onClick={() => setIsPublic(!isPublic)}
              className="select-none text-[20px] font-semibold mr-2 mb-[2px] w-fit break-all text-link-color border-b-2 border-transparent hover:cursor-pointer hover:border-link-color transition-colors duration-200"
            >
              {stack.name}
            </h3>
            <span className="text-text-muted border border-border-color rounded-2xl text-[12px] font-medium px-[7px] ml-1 mb-[6px] align-middle leading-[18px] h-fit">
              {isPublic ? 'Public' : 'Private'}
            </span>
          </div>

          <p className="inline-block text-text-muted text-[0.9rem] w-[85%] mt-1 mb-2 leading-relaxed">{stack.desc}</p>
        </div>

        <div className="flex-center">
          <SelectBtn padding="3px 12px" mini pointer onClick={() => setIsStar(!isStar)}>
            <div className="flex-center">
              <div className="flex-center" style={{ marginRight: '8px' }}>
                {isStar ? <FillStar /> : <Star />}
              </div>
              {isStar ? 'Starred' : 'Star'}
            </div>
          </SelectBtn>
        </div>
      </div>
      <div>
        <div className="mt-2 text-[12px] text-text-3 flex items-start">
          <div className="flex items-start mr-4">
            <div className="flex-center w-4 mr-1">
              {typeof stack.svg === 'string' ? (
                <Image
                  src={stack.svg}
                  alt={stack.svg}
                  width={16}
                  height={16}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                stack.svg
              )}
            </div>
            <OptionalLink href={stack.link}>
              <>{stack.svgName}</>
            </OptionalLink>
          </div>
          {stack.updated}
        </div>
      </div>
    </li>
  )
}

export default React.memo(StackList)
