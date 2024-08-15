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
  width: 296px;
  height: 296px;
  margin: 40px auto 0;

  @media ${({ theme }) => theme.device.tablet} {
    width: 256px;
    height: 256px;
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
    }
  }
`

export default AutoSizeImage
