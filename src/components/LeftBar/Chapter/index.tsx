import React, { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const chapterArray = ['Top', 'About', 'Stacks', 'Experience', 'Education']

type SetToggleProps<T = any> = {
  setSidebarToggle: Dispatch<SetStateAction<T>>
}

const Chapter = ({ setSidebarToggle }: SetToggleProps) => {
  return (
    <Wrap className="flex-c-center">
      {chapterArray.map((t, i) => {
        return (
          <div key={i}>
            <Link href={`#${t}`}>
              <span onClick={() => setSidebarToggle(false)}>{t}</span>
            </Link>
          </div>
        )
      })}
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 2rem 0;
  gap: 0.5rem;

  & > div {
    width: fit-content;
    display: inline-block;

    &:after {
      display: block;
      padding: 0 0.2rem;
      content: '';
      border-bottom: solid 2px ${({ theme }) => theme.palette.borderColor};
      transform: scaleX(0);
      transition: transform 0.2s;
    }

    &:hover:after {
      transform: scaleX(1);
    }

    & > span {
      cursor: pointer;
      padding: 0 0.3rem;

      &:hover {
        color: ${({ theme }) => theme.palette.text1};
        transition: all 0.3s;
      }
    }
  }
`

export default Chapter
