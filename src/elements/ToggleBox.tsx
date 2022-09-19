import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const ToggleBox = ({
  checked,
  changeMode,
}: {
  checked: boolean | undefined
  changeMode?: () => void | undefined
}) => {
  const [check, setCheck] = useState(true)

  useEffect(() => {
    setCheck(checked || true)
  }, [checked])
  return (
    <CheckBox
      type="checkbox"
      onChange={(e) => {
        setCheck(e.target.checked)
        if (changeMode) changeMode()
      }}
      checked={check}
    />
  )
}

// width: 5rem;
// height: 2rem;
// background: ${({ theme }) => theme.textColor};
// color: ${({ theme }) => theme.backgroundColor};
// border-radius: 50%;
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
    transition: background-color 0.2s ease-in-out;
    content: '🌞';
    font-size: 1.2rem;
    background: ${({ theme }) => theme.text2};
    color: ${({ theme }) => theme.borderColor};
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
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.text2};
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
      background: ${({ theme }) => theme.text2};
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
`

export default ToggleBox
