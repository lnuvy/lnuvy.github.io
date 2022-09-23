import styled from '@emotion/styled'

export const Wrap = styled.div`
  position: relative;
  display: flex;
  padding: 16px 0;
  margin-left: 16px;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 2px;
    content: '';
    background-color: ${({ theme }) => theme.palette.stackBorder};
  }

  & > .exp-badge {
    //height: 16px;
    //margin-top: 8px;
    //margin-bottom: 8px;
    ////color: var(--color-fg-muted);
    ////background-color: var(--color-canvas-default);
    //border: 0;

    position: relative;
    z-index: 1;
    display: flex;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    margin-left: -15px;
    //color: var(--color-fg-muted);
    align-items: center;
    border: 2px solid transparent;
    border-radius: 50%;
    justify-content: center;
    flex-shrink: 0;

    & > svg {
      background-color: ${({ theme }) => theme.palette.backgroundColor};
    }
  }
`

export const ContentWrap = styled.div`
  gap: 0.5rem;
  & > span {
    height: 32px;
    display: flex;
    align-items: center;
    & > i {
      margin-left: 1rem;
      font-size: 0.8rem;
    }
  }
`

export const BorderBox = styled.ol`
  list-style: none;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;

  & > li {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
  }
`
