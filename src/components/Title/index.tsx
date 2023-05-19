import { settings } from '@constant/CarouselSetting';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { H1, Item, StyledSlider, TextBox, TitleWrapper, Wrap } from './styles';

const TitleCarousel = () => {
  return (
    <Wrap id="Top">
      <StyledSlider {...settings}>
        {[...Array(2)].map((_, i) => {
          if (i === 0) return <Page key={i} />;
          else
            return (
              <Item key={i}>
                <h3>변화를 좋아하고 시대의 흐름에 서핑하는</h3>
                <p>해당 사진은 알파벳에이(주) 근무 당시 개발자 팀원들과 코드리뷰하는 모습입니다.</p>
              </Item>
            );
        })}
      </StyledSlider>
    </Wrap>
  );
};

const array = ['Frontend', 'Developer'];

const Page = () => {
  return (
    <TextBox>
      <TitleWrapper>
        {array.map((t, i) => {
          return (
            <H1 key={`${i}_${i}`} pos={i}>
              {t}
            </H1>
          );
        })}
      </TitleWrapper>

      <p>JS(TS)를 기반으로 다양한 프론트엔드 기술을 공부합니다.</p>
    </TextBox>
  );
};

export default TitleCarousel;
