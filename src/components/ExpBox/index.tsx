import React from 'react'
import { Wrap, ContentWrap, BorderBox } from './ExpStyles'
import Octicon from 'public/svg/Octicon'
import { Company } from '@typing/Frontend'
import SelectBtn from '@elements/SelectBtn'
import Inequality from '../../../public/svg/Inequality'

const ExpBox = ({ company }: { company: Company }) => {
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
              <li key={`${i}_${s}`}>
                <div>{s}</div>
                <div>
                  <SelectBtn padding="5px 16px" pointer>
                    <Inequality />
                  </SelectBtn>
                </div>
              </li>
            ))}
          </BorderBox>
        </ContentWrap>
      </Wrap>
    )
}

export default ExpBox
