import React, { useCallback, useContext, useState } from 'react'
import { Wrap, ContentWrap, BorderBox, DetailList } from './ExpStyles'
import Octicon from 'public/svg/Octicon'
import { Company } from '@typing/front'
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

  if (!company) return <></>

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
          {/* 맵돌리기 */}
          {posts?.map((v: any) => {
            return Object.entries(v).map(([companyName, array]: any) => {
              if (companyName !== company.folderName) return null

              return array.map(
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
              )
            })
          })}
          {/* {posts
            ?.map((object: any) => {
              console.log(object)

              return Object.entries(([company, obj]: any) => {
                console.log('company:', company, 'obj: ', obj)
              })
            })
            .map(
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
            )} */}
        </BorderBox>
      </ContentWrap>
    </Wrap>
  )
}

export default ExpBox
