import React, { useCallback, useContext, useState } from 'react'
import { Wrap, ContentWrap, BorderBox, DetailList } from './ExpStyles'
import Octicon from 'public/svg/Octicon'
import { Company } from '@typing/Frontend'
import { marked } from 'marked'
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

  if (company.id === 'last-career')
    return (
      <Wrap>
        <div className="exp-badge">
          <Octicon />
        </div>

        <ContentWrap className="flex-c-start">
          <span>{company.name}</span>
        </ContentWrap>
      </Wrap>
    )
  else
    return (
      <Wrap>
        <div className="exp-badge">
          <Octicon />
        </div>

        <ContentWrap className="flex-c-start">
          <span>
            {company.name}
            <i>
              {company.startDate} ~ {company.lastDay}
            </i>
          </span>
          <BorderBox>
            {posts?.map(
              (
                { title, content }: { title: string; content: string },
                i: number,
              ) => (
                <React.Fragment key={`${i}_${title}`}>
                  <li
                    className={`title-li ${
                      openIndex === i ? 'active-color' : 'inactive'
                    }`}
                    onClick={() => {
                      onClickOpen(i)
                    }}
                  >
                    <div className="desc-div">{title}</div>
                  </li>

                  {openIndex === i && (
                    <DetailList index={openIndex}>
                      <div className="detail-div">
                        <div
                          className="md-div"
                          dangerouslySetInnerHTML={{
                            __html: marked(content),
                          }}
                        />
                      </div>
                    </DetailList>
                  )}
                </React.Fragment>
              ),
            )}
          </BorderBox>
        </ContentWrap>
      </Wrap>
    )
}

export default ExpBox
