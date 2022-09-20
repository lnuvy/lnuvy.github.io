import styled from '@emotion/styled'

export const ListWrap = styled.div`
  padding: 0 0.5rem;
  margin: 0 auto;
  & > ul {
    padding: 0;

    & > li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 2rem 0;
      border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
      //border-bottom: 1px solid #373e47;
      text-align: -webkit-match-parent;

      &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
      }

      & > .stack-left {
        width: 80%;
        & > div {
          margin-bottom: 4px;
          display: flex;
          & > h3 {
            font-size: 20px;
            font-weight: 600;
            margin: 0 0.5rem 2px 0;
            word-break: break-all;
            width: fit-content;
            color: ${({ theme }) => theme.palette.linkColor};
            border-bottom: 2px solid transparent;
            &:hover {
              cursor: pointer;
              border-bottom: 2px solid ${({ theme }) => theme.palette.linkColor};
            }
          }
        }
      }
    }
  }
`

export const Label = styled.span`
  color: #768390;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 2rem;
  font-size: 12px;
  font-weight: 500;
  padding: 0 7px;
  margin-left: 4px;
  margin-bottom: 6px;
  vertical-align: middle;
  line-height: 18px;
`

export const Description = styled.p`
  display: inline-block;
  color: #768390;
  font-size: 0.9rem;
  width: 75%;
  margin: 4px 0 0.5rem;
  line-height: 1.5;
`

export const StackInfo = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text3};
`

export const StackImg = styled.img``
