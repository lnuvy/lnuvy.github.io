import { settings } from '@constant/carousel-setting';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { FirstSlider, H1, SecondSlider, StyledSlider, TextWrapper, Wrap } from './styles';

const TitleCarousel = () => {
  return (
    <Wrap id="Top">
      <StyledSlider {...settings}>
        <FirstSlider />
        <SecondSlider />
      </StyledSlider>
      <TextWrapper>
        <H1>FrontEnd Developer</H1>
        <p>JavaScript(TS)를 기반으로 다양한 프론트엔드 기술을 공부하고 있습니다.</p>
      </TextWrapper>
    </Wrap>
  );
};
export default TitleCarousel;
