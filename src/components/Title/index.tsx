import { settings } from '@constant/carousel-setting';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { FirstSlider, SecondSlider, StyledSlider, Wrap } from './styles';

const TitleCarousel = () => {
  return (
    <Wrap id="Top">
      <StyledSlider {...settings}>
        <FirstSlider />
        <SecondSlider />
      </StyledSlider>
      <div>FrontEnd Developer 이한울</div>
    </Wrap>
  );
};
export default TitleCarousel;
