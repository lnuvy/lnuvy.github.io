import styled from '@emotion/styled'
import Link from 'next/link'

interface Props {}

const Blog = ({}: Props) => {
  return (
    <Wrap id="Blog">
      <br />
      <h2>🖥️ Blog.</h2>
      <br />
      <Para>
        노션페이지를 빌드시켜주는{' '}
        <LinkSpan>
          <Link href="https://super.so/">
            <a target="_blank">super.so</a>
          </Link>
        </LinkSpan>
        를 통해 개인블로그를 작성중입니다.
      </Para>
      <LinkSpan>
        {'➤ '}
        <Link href="https://lnuvy.super.site/blog/">
          <a target="_blank">블로그 구경하기</a>
        </Link>
      </LinkSpan>
    </Wrap>
  )
}

export default Blog

const Wrap = styled.div``

const Para = styled.p`
  margin-top: 0.2rem;
  /* margin-left: 0.5rem; */
  font-weight: 400;

  &::marker {
    /* color: ; */
  }
`

const LinkSpan = styled.span`
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.palette.text1};
  }
`
