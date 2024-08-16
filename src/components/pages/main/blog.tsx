import styled from '@emotion/styled'
import Link from 'next/link'
import { LinkStyle, TextWrapper } from '@components/title-carousel/styles'
import { clickOutLink } from '@helpers/tracking'

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
        <Link onClick={() => clickOutLink('notion_blog')} href="https://lnuvyresume.super.site/blog/">
          <a target="_blank">블로그 구경하기</a>
        </Link>
      </LinkSpan>

      <br />
      <br />
      <Para>그중 좋은 소스는 비정기적으로 러너스 사내 미디엄 블로그에도 작성하고 있습니다 {':)'}</Para>
      <TextWrapper>
        <p className="dot">
          •&nbsp;
          <Link
            href="https://medium.com/runners-im/sw%EA%B5%AD%EC%A0%9C%ED%99%94-i18n-%EB%A5%BC-%EC%9C%84%ED%95%9C-i18next-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EC%99%80-react-i18next-ebb579f1763b"
            onClick={() => clickOutLink('medium_i18n')}
          >
            <a target="_blank">
              <LinkStyle>SW국제화(i18n)를 위한 i18next 라이브러리와 react-i18next</LinkStyle>
            </a>
          </Link>
        </p>

        <p className="dot">
          •&nbsp;
          <Link
            href="https://medium.com/runners-im/%EC%9D%B4-%EA%B0%80%EC%84%A4%EC%9D%B4-%EB%A7%9E%EB%8A%94-%EA%B0%80%EC%84%A4%EC%9D%BC%EA%B9%8C-%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%84%EC%84%9D-%ED%88%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EC%9D%B4%EC%8B%9D%ED%95%98%EA%B8%B0-google-analytics-mixpanel-b008c557fe5d"
            onClick={() => clickOutLink('medium_ga')}
          >
            <a target="_blank">
              <LinkStyle>프로덕트 데이터 분석 툴 프로젝트에 이식하기 (Google Analytics, Mixpanel)</LinkStyle>
            </a>
          </Link>
        </p>

        <p className="dot">
          •&nbsp;
          <Link
            href="https://medium.com/runners-im/next-js-14-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EB%8F%84%EC%A0%84%EA%B8%B0-usesearchparams-react-router-dom-urlsearchparams-770d54a183c0"
            onClick={() => clickOutLink('medium_search_params')}
          >
            <a target="_blank">
              <LinkStyle>Next.js 14v 마이그레이션 도전기 | useSearchParams</LinkStyle>
            </a>
          </Link>
        </p>

        <p className="dot">
          •&nbsp;
          <Link
            href="https://medium.com/runners-im/next-js-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94%EC%99%80-lighthouse-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-ba9f3cd3221b"
            onClick={() => clickOutLink('medium_image')}
          >
            <a target="_blank">
              <LinkStyle>Next.js 이미지 최적화와 Lighthouse 성능 개선 확인하기</LinkStyle>
            </a>
          </Link>
        </p>
      </TextWrapper>
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
