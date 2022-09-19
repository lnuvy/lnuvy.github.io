import styled from '@emotion/styled'

export const Wrap = styled.div`
  height: 100vh;
  padding: 1rem;
  width: 30vw;
  position: sticky;
  top: 0;
`

export const ImageProfile = styled.div`
  width: 260px;
  height: 260px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borderColor};
`

export const Footer = styled.div`
  font-size: 0.8rem;
  position: relative;
  top: 20px;
`

export const Span = styled.span`
  color: rgba(205, 217, 229, 0.5);
  margin: 0 1rem;
`
