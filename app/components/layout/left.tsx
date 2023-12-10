import AutoSizeImage from 'app/components/LeftBar/AutoSizeImage';
import Chapter from 'app/components/LeftBar/Chapter';
import ToggleBox from 'app/elements/ToggleBox';
import { useCheck } from 'app/hooks/use-input';
import { BurgerIcon, Footer, ModeChangeWrap, NameInfo, SidebarBtn, Span, Wrap } from './styles/left-style';

const LeftBar = () => {
  const [sidebarToggle, onChangeToggle, setSidebarToggle] = useCheck(false);

  return (
    <>
      <br />
      <SidebarBtn>
        <input
          type="checkbox"
          id="sidebar"
          style={{ display: 'none' }}
          checked={sidebarToggle}
          onChange={onChangeToggle}
        />
        <BurgerIcon mobileToggle={sidebarToggle} htmlFor="sidebar" onClick={(e) => e.stopPropagation()}>
          <span />
          <span />
          <span />
        </BurgerIcon>
      </SidebarBtn>
      <br />

      <Wrap mobileToggle={sidebarToggle}>
        <br />

        <AutoSizeImage
          src="images/profile.jpg"
          onClick={() => window.open('https://github.com/lnuvy')}
          alt="profile"
          layout="fill"
        />

        <NameInfo className="flex-c-start">
          <h4>이한울</h4>

          <div className="flex-sb" style={{ padding: '0 1rem ' }}>
            <span>lnuvy</span>
            {/*<i>1997.02.24</i>*/}
          </div>
        </NameInfo>

        <Chapter setSidebarToggle={setSidebarToggle} />

        <div style={{ marginTop: '2rem' }}>
          <Footer>
            <Span>© 2022. lnuvy All rights reserved.</Span>
          </Footer>
        </div>
        <ModeChangeWrap className="flex-center">
          <ToggleBox />
        </ModeChangeWrap>
      </Wrap>
    </>
  );
};

export default LeftBar;
