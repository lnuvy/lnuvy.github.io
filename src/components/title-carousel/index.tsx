import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import TransitionWrapper from '@components/common/transition-wrapper'
import About from '@components/pages/main/about'
import useIsFirstScroll from '@hooks/use-is-first-scroll'
import ScrollDownArrow from './scroll-down-arrow'
import { FirstSlider, H1, LinkStyle, TextWrapper, Wrap } from './styles'

const TitleCarousel = () => {
  const senseLink =
    'https://sense.im?utm_source=notion&utm_medium=display&utm_campaign=백링크&utm_content=노션_제이든_블로그&utm_trk=8'

  const { isScrolledDown, isAlreadyScrolled } = useIsFirstScroll()

  const isShowScroll = !isScrolledDown && !isAlreadyScrolled

  return (
    <Wrap id="Top">
      <section
        style={{
          transition: 'all',
          position: 'relative',
          height: `${isAlreadyScrolled ? '60vh' : isScrolledDown ? '60vh' : '100vh'}`,
        }}
      >
        {isShowScroll && <ScrollDownArrow />}
        <Swiper modules={[Pagination]}>
          {[...new Array(1)].map((_, i) => {
            return (
              <SwiperSlide key={i}>
                <FirstSlider />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>

      <TransitionWrapper>
        <TextWrapper>
          <H1>FrontEnd Developer</H1>
          <p>JavaScript(TS)를 기반으로 다양한 프론트엔드 기술을 공부하고 있습니다.</p>
          <p>
            현재 재직중인 러너스에서&nbsp;
            <Link href={senseLink}>
              <a target={'_blank'}>
                <LinkStyle>라이프스타일 플랫폼 센스</LinkStyle>
              </a>
            </Link>
            &nbsp;개발을 담당하고 있습니다.
          </p>

          <p className="dot">
            •&nbsp;
            <Link href="https://store.sense.im">
              <a target="_blank">
                <LinkStyle>센스 스토어</LinkStyle> 둘러보기
              </a>
            </Link>
          </p>
          <p className="dot">
            •&nbsp;
            <Link href="https://lab.sense.im">
              <a target="_blank">
                <LinkStyle>센스 랩</LinkStyle> 둘러보기
              </a>
            </Link>
          </p>
          {/* <p className="dot">
            •&nbsp;
            <Link href="https://pudding.im">
              <a target="_blank">
                <LinkStyle>푸딩</LinkStyle> 둘러보기
              </a>
            </Link>
          </p> */}
        </TextWrapper>
      </TransitionWrapper>

      <TransitionWrapper>
        <About />
      </TransitionWrapper>
    </Wrap>
  )
}
export default TitleCarousel
