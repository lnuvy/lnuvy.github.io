import OptionalLink from '@components/common/optional-link';
import { stacksArray } from '@constant/stacks-array';
import { Stack } from '@typing/front';
import Image from 'next/image';
import FillStar from 'public/svg/FillStar';
import Star from 'public/svg/Star';
import React, { useEffect, useState } from 'react';
import SelectBtn from '../../elements/SelectBtn';
import { Description, Label, ListWrap, StackInfo } from './styles';

const StackList = () => {
  return (
    <ListWrap>
      <ul>
        {stacksArray.map((stack) => (
          <EachStack key={stack.id} stack={stack} />
        ))}
      </ul>
    </ListWrap>
  );
};

const EachStack = ({ stack }: { stack: Stack }) => {
  const [isPublic, setIsPublic] = useState(false);
  const [isStar, setIsStar] = useState(false);

  useEffect(() => {
    setIsPublic(stack.isPublic === 1);
    setIsStar(stack.starred === 1);
  }, [stack]);

  return (
    <li>
      <div className="each-stack-top">
        <div className="stack-left">
          <div>
            <h3 onClick={() => setIsPublic(!isPublic)}>{stack.name}</h3>
            <Label>{isPublic ? 'Public' : 'Private'}</Label>
          </div>

          <Description>{stack.desc}</Description>
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
        <StackInfo className="flex-start">
          <div className="flex-start" style={{ marginRight: '16px' }}>
            <div className="flex-center" style={{ width: 16, marginRight: '4px' }}>
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
        </StackInfo>
      </div>
    </li>
  );
};

export default React.memo(StackList);
