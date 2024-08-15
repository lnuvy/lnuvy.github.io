import React from 'react'
import styled from '@emotion/styled'
import Image, { ImageProps } from 'next/image'

const AutoSizeImage = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <ImageWrapper>
      <Image layout="fill" className="autoImage" {...props} alt="lnuvy profile 사진입니다!" />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  width: 260px;
  height: 260px;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.tablet} {
    width: 200px;
    height: 200px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 120px;
    height: 120px;
  }

  & > span {
    position: unset !important;

    & > .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;

      box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.boxShadow};
      cursor: pointer;

      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.palette.borderColor};
    }
  }
`

export default AutoSizeImage
