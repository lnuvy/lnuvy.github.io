import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import TransitionWrapper from '@components/common/transition-wrapper'
import About from '@components/pages/main/about'
import { clickOutLink } from '@helpers/tracking'
import useIsFirstScroll from '@hooks/use-is-first-scroll'
import titleImage from 'public/images/main.jpg'
import ScrollDownArrow from './scroll-down-arrow'

const TitleCarousel = () => {
  const senseLink =
    'https://sense.im?utm_source=notion&utm_medium=display&utm_campaign=백링크&utm_content=노션_제이든_블로그&utm_trk=8'

  const { isScrolledDown, isAlreadyScrolled } = useIsFirstScroll()
  const isShowScroll = !isScrolledDown && !isAlreadyScrolled

  return (
    <div id="Top" className="sticky top-0 w-full min-h-screen">
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
                <div
                  className={clsx(
                    'relative flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.2,0,0.2,1)]',
                    isScrolledDown ? 'h-[60vh]' : 'h-[100vh]',
                  )}
                >
                  <Image
                    layout="fill"
                    src={titleImage}
                    placeholder="blur"
                    sizes="2000px"
                    alt="이한울 코드리뷰 사진"
                    quality={100}
                    className={clsx(
                      'object-cover z-10',
                      'object-[right_50%_bottom_45%] max-md:object-[right_90%_bottom_45%]',
                    )}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>

      <TransitionWrapper>
        {(isAlreadyScrolled || isScrolledDown) && (
          <div className="p-4 [&>p]:m-auto [&>p]:mb-5 [&>p]:text-gray-500 [&>p]:text-[0.9rem] [&>p]:animate-[moveDown_2s] max-md:[&>p]:text-[0.7rem] [&>.dot]:ml-3">
            <h1 className="w-full text-center font-semibold mt-0 mb-8 text-text-2 relative -z-10 opacity-0 animate-[moveUp_0.9s_forwards] delay-700">
              FrontEnd Developer
            </h1>
            <p>JavaScript(TS)를 기반으로 다양한 프론트엔드 기술을 공부하고 있습니다.</p>
            <p>
              현재 재직중인 러너스에서&nbsp;
              <Link href={senseLink} onClick={() => clickOutLink('sense_web')}>
                <a target={'_blank'}>
                  <span className="font-semibold text-link hover:underline">라이프스타일 플랫폼 센스</span>
                </a>
              </Link>
              &nbsp;개발을 담당하고 있습니다.
            </p>

            <p className="dot">
              •&nbsp;
              <Link href="https://store.sense.im" onClick={() => clickOutLink('sense_store')}>
                <a target="_blank">
                  <span className="font-semibold text-link hover:underline">센스 스토어</span> 둘러보기
                </a>
              </Link>
            </p>
            <p className="dot">
              •&nbsp;
              <Link href="https://lab.sense.im" onClick={() => clickOutLink('sense_lab')}>
                <a target="_blank">
                  <span className="font-semibold text-link hover:underline">센스 랩</span> 둘러보기
                </a>
              </Link>
            </p>
          </div>
        )}
      </TransitionWrapper>

      <TransitionWrapper>
        <About />
      </TransitionWrapper>
    </div>
  )
}
export default TitleCarousel
