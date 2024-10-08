import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import TransitionWrapper from '@components/common/transition-wrapper'
import About from '@components/pages/main/about'
import { clickOutLink } from '@helpers/tracking'
import useIsFirstScroll from '@hooks/use-is-first-scroll'
import titleImage from 'public/images/main.jpg'
import ScrollDownArrow from './scroll-down-arrow'
import { FirstSlider, H1, LinkStyle, StyledImage, TextWrapper, Wrap } from './styles'

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
        <Swiper modules={[Pagination]} effect={'fade'}>
          {[...new Array(1)].map((_, i) => {
            return (
              <SwiperSlide key={i}>
                <FirstSlider isScroll={isScrolledDown}>
                  <StyledImage
                    layout="fill"
                    src={titleImage}
                    placeholder="blur"
                    sizes="2000px"
                    alt="이한울 코드리뷰 사진"
                    quality={100}
                  />
                </FirstSlider>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>

      <TransitionWrapper>
        {(isAlreadyScrolled || isScrolledDown) && (
          <TextWrapper>
            <H1>FrontEnd Developer</H1>
            <p>JavaScript(TS)를 기반으로 다양한 프론트엔드 기술을 공부하고 있습니다.</p>
            <p>
              현재 재직중인 러너스에서&nbsp;
              <Link href={senseLink} onClick={() => clickOutLink('sense_web')}>
                <a target={'_blank'}>
                  <LinkStyle>라이프스타일 플랫폼 센스</LinkStyle>
                </a>
              </Link>
              &nbsp;개발을 담당하고 있습니다.
            </p>

            <p className="dot">
              •&nbsp;
              <Link href="https://store.sense.im" onClick={() => clickOutLink('sense_store')}>
                <a target="_blank">
                  <LinkStyle>센스 스토어</LinkStyle> 둘러보기
                </a>
              </Link>
            </p>
            <p className="dot">
              •&nbsp;
              <Link href="https://lab.sense.im" onClick={() => clickOutLink('sense_lab')}>
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
        )}
      </TransitionWrapper>

      <TransitionWrapper>
        <About />
      </TransitionWrapper>
    </Wrap>
  )
}
export default TitleCarousel
