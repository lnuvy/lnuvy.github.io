import React, { useContext } from 'react'
import { Wrap, ContentWrap, BorderBox } from './ExpStyles'
import Octicon from 'public/svg/Octicon'
import { Company } from '@typing/Frontend'
import { marked } from 'marked'
import { MDContext } from '../../../pages'

import matter from 'gray-matter'
// import SelectBtn from '@elements/SelectBtn'
// import Inequality from '../../../public/svg/Inequality'

const ExpBox = ({ company }: { company: Company }) => {
  const { posts }: any = useContext(MDContext)
  console.log(posts)
  console.log(posts[1].content)
  const a = posts[1].content

  console.log(a)

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
                <li>
                  <div className="desc-div">{s}</div>
                </li>
                <li className="detail-li">
                  <div className="detail-div">
                    {a}
                    {/*<div>{posts[i].content}</div>*/}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(a),
                      }}
                    />
                  </div>
                </li>
              </React.Fragment>
            ))}
          </BorderBox>
        </ContentWrap>
      </Wrap>
    )
}

export default ExpBox
