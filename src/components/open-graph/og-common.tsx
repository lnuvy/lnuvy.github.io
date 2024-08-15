import Head from 'next/head'
import { HEAD_COMMON_INFO, OG } from './constant'

export interface OGCommonProps {
  title?: string
  author?: string
  description?: string
  url?: string
  image?: string
  type?: 'website' | 'article'
  ogRender?: () => React.ReactElement
}

const OGCommon = (props: OGCommonProps) => {
  const { url, title, author, description, image, type, ogRender } = props

  const ellipsisDescription = () => {
    if (description == null) return description
    if (description.length <= 120) return description
    return `${description.slice(0, 117)}...`
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scaleable=0" />
      {/* title & description */}
      <title>{title ?? `${HEAD_COMMON_INFO.NAME} | ${HEAD_COMMON_INFO.CATCHPHRASE}`}</title>
      <meta
        name={OG['description']}
        content={ellipsisDescription() ?? HEAD_COMMON_INFO.DESCRIPTION}
        key={OG['description']}
      />
      {/* 아티클/ffeed에서는 작성자, 그 외에는 ffeed 입니다 */}
      {/* https://developers.google.com/search/blog/2013/08/relauthor-frequently-asked-advanced */}
      <link rel={OG['author']} href={author ?? HEAD_COMMON_INFO.NAME} key={OG['author']} />
      {/* openGraph */}
      <meta property={OG['og:type']} content={type ?? 'website'} key={OG['og:type']} />
      <meta
        property={OG['og:title']}
        content={title ?? `${HEAD_COMMON_INFO.NAME} | ${HEAD_COMMON_INFO.CATCHPHRASE}`}
        key={OG['og:title']}
      />
      <meta property={OG['og:url']} content={url ?? HEAD_COMMON_INFO.URL} key={OG['og:url']} />
      <meta property={OG['og:site_name']} content={title ?? HEAD_COMMON_INFO.NAME} key={OG['og:site_name']} />
      <meta
        property={OG['og:description']}
        content={ellipsisDescription() ?? HEAD_COMMON_INFO.DESCRIPTION}
        key={OG['og:description']}
      />
      {/* <meta property={OG['og:image']} content={image ? `https://www.ffeed.me${image}` : HEAD_COMMON_INFO.IMAGE} key={OG['og:image']} /> */}
      <meta
        property={OG['og:image']}
        content={image ? `https://www.ffeed.me/_next/image?url=${image}&w=450&q=100` : HEAD_COMMON_INFO.IMAGE}
        key={OG['og:image']}
      />
      {/* twitter */}
      <meta name={OG['twitter:card']} content="summary_large_image" key={OG['twitter:card']} />
      <meta
        name={OG['twitter:title']}
        content={title ?? `${HEAD_COMMON_INFO.NAME} | ${HEAD_COMMON_INFO.CATCHPHRASE}`}
        key={OG['twitter:title']}
      />
      <meta
        name={OG['twitter:description']}
        content={ellipsisDescription() ?? HEAD_COMMON_INFO.DESCRIPTION}
        key={OG['twitter:description']}
      />
      <meta name={OG['twitter:image']} content={image ?? HEAD_COMMON_INFO.IMAGE} key={OG['twitter:image']} />
      {ogRender && ogRender()}
    </Head>
  )
}

export default OGCommon
