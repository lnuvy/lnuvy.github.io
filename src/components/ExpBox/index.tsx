import React, { useCallback, useContext, useState } from 'react'
import {
  Wrap,
  ContentWrap,
  BorderBox,
  DetailList,
  SkeletonLi,
} from './ExpStyles'
import Octicon from 'public/svg/Octicon'
import { Company } from '@typing/Frontend'
import { marked } from 'marked'
import { MDContext } from '../../../pages'

import matter from 'gray-matter'
// import SelectBtn from '@elements/SelectBtn'
// import Inequality from '../../../public/svg/Inequality'

const ExpBox = ({ company }: { company: Company }) => {
  const { posts }: any = useContext(MDContext)
  const a = posts[1].content

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
            {company.summary.map((s, i) => (
              <React.Fragment key={`${i}_${s}`}>
                <li
                  className="title-li"
                  onClick={() => {
                    onClickOpen(i)
                  }}
                >
                  <div className="desc-div">{s}</div>
                </li>

                {openIndex === i ? (
                  <DetailList index={openIndex}>
                    <div className="detail-div">
                      <div
                        className="md-div"
                        dangerouslySetInnerHTML={{
                          __html: marked(a),
                        }}
                      />
                    </div>
                  </DetailList>
                ) : (
                  <SkeletonLi index={openIndex} />
                )}
              </React.Fragment>
            ))}
          </BorderBox>
        </ContentWrap>
      </Wrap>
    )
}

export default ExpBox
