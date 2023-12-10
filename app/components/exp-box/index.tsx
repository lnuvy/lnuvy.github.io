import { Company } from 'app/typing/front';
import { marked } from 'marked';
import Octicon from 'public/svg/Octicon';
import React, { useCallback, useContext, useState } from 'react';
import { MDContext } from '../../../pages';
import { BorderBox, ContentWrap, DetailList, Wrap } from './styles';

//11
const ExpBox = ({ company }: { company: Company }) => {
  const { posts }: any = useContext(MDContext);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onClickOpen = useCallback(
    (i: number) => {
      if (openIndex === i) setOpenIndex(null);
      else setOpenIndex(i);
    },
    [openIndex],
  );

  if (!company) return <></>;

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
    );

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
          {posts?.map((v: any) => {
            return Object.entries(v).map(([companyName, array]: any) => {
              if (companyName !== company.folderName) return null;

              return array.map(({ title, content }: { title: string; content: string }, i: number) => (
                <React.Fragment key={`${i}_${title}`}>
                  <li
                    className={`title-li ${openIndex === i ? 'active-color' : 'inactive'}`}
                    onClick={() => {
                      onClickOpen(i);
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
              ));
            });
          })}
        </BorderBox>
      </ContentWrap>
    </Wrap>
  );
};

export default ExpBox;
