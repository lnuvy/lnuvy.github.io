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
          <div className="flex items-center gap-2 mb-1">
            <h3
              onClick={() => setIsPublic(!isPublic)}
              className="text-xl font-bold text-link-color cursor-pointer hover:underline select-none break-all transition-colors duration-200"
            >
              {stack.name}
            </h3>
            <span className="text-xs border border-border-color rounded-full px-2 py-0.5 text-text-muted font-medium">
              {isPublic ? 'Public' : 'Private'}
            </span>
          </div>

          <p className="inline-block text-text-muted text-[0.9rem] w-[85%] mt-1 mb-2 leading-relaxed whitespace-pre-wrap">
            {stack.desc}
          </p>
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
          <div className="flex items-center mr-4">
            <div className="flex w-4 mr-1">
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
