import React from 'react'
import styled from '@emotion/styled'
import Image, { ImageProps } from 'next/image'

const AutoSizeImage = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <ImageWrapper>
      <Image layout="fill" className="autoImage" {...props} />
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
    width: 150px;
    height: 150px;
  }

  & > span {
    position: unset !important;

    & > .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;

      cursor: pointer;

      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.palette.borderColor};
    }
  }
`

export default AutoSizeImage
