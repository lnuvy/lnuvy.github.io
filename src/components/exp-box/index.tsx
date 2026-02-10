import React, { useCallback, useContext, useState } from 'react'
import clsx from 'clsx'
import { marked } from 'marked'
import { clickInteraction } from '@helpers/tracking'
import { Company } from '@typing/front'
import Octicon from 'public/svg/Octicon'
import { MDContext } from '../../../pages'

const ExpBox = ({ company }: { company: Company }) => {
  const { posts }: any = useContext(MDContext)

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const onClickOpen = useCallback(
    (i: number) => {
      if (openIndex === i) setOpenIndex(null)
      else setOpenIndex(i)
    },
    [openIndex],
  )

  if (!company) return <></>

  if (company.id === 'last-career')
    return (
      <div className="w-full relative flex py-4 ml-4 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-[2px] before:content-[''] before:bg-stack-border">
        <div className="relative z-10 flex w-8 h-8 mr-2 ml-[-15px] items-center border-2 border-transparent rounded-full justify-center shrink-0 [&>svg]:bg-background-default">
          <Octicon />
        </div>

        <div className="gap-2 w-full flex flex-col justify-center items-start">
          <span>{company.name}</span>
        </div>
      </div>
    )

  return (
    <div className="w-full relative flex py-4 ml-4 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-[2px] before:content-[''] before:bg-stack-border">
      <div className="relative z-10 flex w-8 h-8 mr-2 ml-[-15px] items-center border-2 border-transparent rounded-full justify-center shrink-0 [&>svg]:bg-background-default">
        <Octicon />
      </div>

      <div className="gap-2 w-full flex flex-col justify-center items-start">
        <span className="min-h-[32px] flex items-center">
          {company.name}
          <i className="ml-4 text-[0.8rem]">
            {company.startDate} ~ {company.lastDay}
          </i>
        </span>
        <ol className="list-none border border-border-color rounded-lg p-0 mb-4 w-full">
          {posts?.map((v: any) => {
            return Object.entries(v).map(([companyName, array]: any) => {
              if (companyName !== company.folderName) return null

              return array.map(({ title, content }: { title: string; content: string }, i: number) => (
                <React.Fragment key={`${i}_${title}`}>
                  <li
                    className={clsx(
                      'flex items-center cursor-pointer px-4 py-2 hover:bg-background-1 first:rounded-t-lg border-b border-border-color last:border-b-transparent last:rounded-b-lg',
                      openIndex === i ? 'bg-background-1' : 'bg-background-default',
                    )}
                    onClick={() => {
                      onClickOpen(i)
                      clickInteraction(`${companyName}-${title}`)
                    }}
                  >
                    <div className="py-2">{title}</div>
                  </li>

                  {openIndex === i && (
                    <li className="px-4 py-2 animate-[t2b_0.5s] border-b border-border-color last:border-b-transparent last:rounded-b-lg">
                      <div className="mx-4">
                        <div
                          className="w-full"
                          dangerouslySetInnerHTML={{
                            __html: marked(content),
                          }}
                        />
                      </div>
                    </li>
                  )}
                </React.Fragment>
              ))
            })
          })}
        </ol>
      </div>
    </div>
  )
}

export default ExpBox
