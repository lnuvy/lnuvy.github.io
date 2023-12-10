import styled from '@emotion/styled';
import { useThemeContext } from 'app/context/theme-context';

const ToggleBox = () => {
  const { isDark, onChangeTheme } = useThemeContext();

  return <CheckBox type="checkbox" onChange={onChangeTheme} checked={isDark} />;
};

const CheckBox = styled.input`
  all: unset;
  cursor: pointer;

  &::before {
    position: absolute;
    width: 4rem;
    height: 2rem;
    border-radius: 2rem;
    display: flex;
    padding: 0 0 0 0.5rem;
    justify-content: flex-start;
    align-items: center;
    transition: background-color 0.3s;
    content: '🌞';
    font-size: 1.2rem;
    background: ${({ theme }) => theme.palette.text2};
    color: ${({ theme }) => theme.palette.borderColor};
  }

  // 원
  &::after {
    position: relative;
    content: '';
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    top: calc((2rem - 1.6rem) / 2);
    left: calc((4rem - 1.1rem) - 4px);
    border-radius: 2rem;
    background: ${({ theme }) => theme.palette.backgroundColor};
    color: ${({ theme }) => theme.palette.text2};
    transition: all 0.2s ease-in-out;
  }

  &:checked {
    transition: all 0.2s ease-in-out;

    ::before {
      width: 4rem;
      height: 2rem;
      padding: 0 0.5rem 0 0;
      border-radius: 2rem;
      content: '🌛 ';
      align-items: center;
      justify-content: end;
      background: ${({ theme }) => theme.palette.text2};
    }

    /* 선택 O 원 */
    ::after {
      display: block;
      position: relative;
      width: 1.6em;
      height: 1.6em;
      border-radius: 2rem;
      z-index: 2;
      top: calc((2rem - 1.6em) / 2);
      left: calc((2rem - 1.6em) / 2);
      background: #fff;
      content: '';
      color: #fff;
    }
  }
`;

export default ToggleBox;
