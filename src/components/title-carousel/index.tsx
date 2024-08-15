import Link from 'next/link'
import { FirstSlider, H1, LinkStyle, TextWrapper, Wrap } from './styles'

const TitleCarousel = () => {
  const senseLink =
    'https://sense.im?utm_source=notion&utm_medium=display&utm_campaign=백링크&utm_content=노션_제이든_블로그&utm_trk=8'

  return (
    <Wrap id="Top">
      <FirstSlider />
      <TextWrapper>
        <H1>FrontEnd Developer</H1>
        <p>JavaScript(TS)를 기반으로 다양한 프론트엔드 기술을 공부하고 있습니다.</p>
        <p>
          현재 재직중인 러너스에서{' '}
          <Link href={senseLink}>
            <a target={'_blank'}>
              <LinkStyle>라이프스타일 플랫폼 센스</LinkStyle>
            </a>
          </Link>{' '}
          개발을 담당하고 있습니다.
        </p>
      </TextWrapper>
    </Wrap>
  )
}
export default TitleCarousel
