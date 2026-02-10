import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

const chapterArray = ['Top', 'About', 'Stacks', 'Experience', 'Blog']

type SetToggleProps<T = any> = {
  setSidebarToggle: Dispatch<SetStateAction<T>>
}

const Chapter = ({ setSidebarToggle }: SetToggleProps) => {
  return (
    <div className="flex flex-col justify-center items-center py-8 gap-2">
      {chapterArray.map((t, i) => {
        return (
          <div
            key={i}
            className={clsx(
              'w-fit inline-block relative',
              // Underline animation (Emotion: &:after, &:hover:after)
              'after:block after:content-[""] after:px-[0.2rem] after:border-b-2 after:border-border-color',
              'after:scale-x-0 after:origin-center after:transition-transform after:duration-300',
              'hover:after:scale-x-100',
            )}
          >
            <Link href={`#${t}`}>
              <span
                onClick={() => setSidebarToggle(false)}
                className="cursor-pointer px-[0.3rem] hover:text-text-1 transition-colors duration-300"
              >
                {t}
              </span>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Chapter
