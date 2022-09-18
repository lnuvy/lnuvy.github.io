import styled from '@emotion/styled'

export const ListWrap = styled.div`
  padding: 0 0.5rem;
  & > ul {
    padding: 0;

    & > li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 2rem 0;
      border-top: 1px solid #373e47;
      border-bottom: 1px solid #373e47;
      text-align: -webkit-match-parent;

      & > .stack-left {
        width: 80%;
        & > div {
          margin-bottom: 4px;
          display: flex;
          & > h3 {
            font-size: 20px;
            font-weight: 600;
            margin: 0 0.5rem 0 0;
            word-break: break-all;
            width: fit-content;
            color: #539bf5;
            &:hover {
              cursor: pointer;
              border-bottom: 1px solid #539bf5;
            }
          }
        }
      }
    }
  }
`

export const Label = styled.span`
  color: #768390;
  border: 1px solid #444c56;
  border-radius: 2rem;
  font-size: 12px;
  font-weight: 500;
  padding: 0 7px;
  margin-left: 4px;
  margin-bottom: 4px;
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
