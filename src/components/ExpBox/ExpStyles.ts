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
  width: fit-content;

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
  padding: 0;
  margin-bottom: 1rem;
  width: 100%;

  & > li {
    &:first-child {
      border-radius: 8px 8px 0 0;
    }
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
    //border-radius: 8px;
    //width: fit-content;

    &:last-child {
      border-bottom: 1px solid transparent;
      border-radius: 0 0 8px 8px;
    }

    & > .desc-div {
      padding: 0.5rem 0;
    }
  }

  & > .title-li {
    display: flex;
    //justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 1rem;

    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.palette.background1};
        //border-radius: 8px;
        //}
        &:first-child {
          border-radius: 8px 8px 0 0;
        }
      }
    }

    //&:focus,
    //&:active {
    //  background-color: #fff;
    //}
  }
  .active-color {
    background-color: ${({ theme }) => theme.palette.background1};
  }
  .inactive {
    background-color: ${({ theme }) => theme.palette.backgroundColor};
  }
`

type ListProps = {
  index: number | null
}

export const DetailList = styled.li<ListProps>`
  /* transition: 0.3s; */
  //display: flex;
  padding: 0.5rem 1rem;

  animation-name: ${({ index }) => (index !== null ? 't2b;' : 'b2t;')};
  animation-duration: 0.5s;
  animation-direction: normal;

  @keyframes t2b {
    from {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    }
    50% {
      //opacity: 0;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes b2t {
    from {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    50% {
      //opacity: 0;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    }
  }

  & > .detail-div {
    //width: calc(100% - 2rem);
    //width: inherit;
    margin: 0 1rem;
  }

  //& .md-div {
  //  width: 100%;
  //}
`
