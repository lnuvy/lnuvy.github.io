import React from 'react'
import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'

const AutoSizeImage = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <div
      className={clsx(
        'w-[296px] h-[296px] mt-10 mx-auto',
        'md:w-[256px] md:h-[256px]',
        'max-md:w-[120px] max-md:h-[120px]',
        // Image wrapper styles override next/image specific behaviors if needed
        '[&>span]:static!',
        '[&_.autoImage]:object-contain! [&_.autoImage]:relative! [&_.autoImage]:h-auto!',
        '[&_.autoImage]:shadow-[0_0_0_1px_var(--box-shadow)] [&_.autoImage]:cursor-pointer [&_.autoImage]:rounded-full',
      )}
    >
      <Image layout="fill" className="autoImage" {...props} alt="lnuvy profile 사진입니다!" />
    </div>
  )
}

export default AutoSizeImage
