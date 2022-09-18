import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const chapterArray = ['Top', 'About', 'Stacks', 'Experience', 'Education']

const Chapter = () => {
  return (
    <Wrap className="flex-c-center">
      {chapterArray.map((t, i) => {
        return (
          <div key={i}>
            <Link href={`#${t}`}>
              <span>{t}</span>
            </Link>
          </div>
        )
      })}
    </Wrap>
  )
}

const Wrap = styled.div`
  gap: 0.5rem;

  & > div {
    width: fit-content;
    display: inline-block;

    &:after {
      display: block;
      padding: 0 0.2rem;
      content: '';
      border-bottom: solid 2px #444c56;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    &:hover:after {
      //border-bottom: solid 2px #539bf5;
      transform: scaleX(1);
    }

    & > span {
      cursor: pointer;
      padding: 0 0.3rem;

      &:hover {
        color: rgba(205, 217, 229, 0.5);
        transition: all 0.3s ease-in-out;
      }
    }
  }
`

export default Chapter
