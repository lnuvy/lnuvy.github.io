import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
import LeftBar from '@components/LeftBar'
import RightContent from '../src/layout/RightContent'
import ScrollProgress from '@components/ScrollProgressBar'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { createContext } from 'react'

export const MDContext = createContext({})

const Home: NextPage = ({ changeMode, posts }: any) => {
  console.log(posts)

  const contextValue = { posts }
  return (
    <MDContext.Provider value={contextValue}>
      <GlobalWrap>
        <Head>
          <title>프론트엔드 개발자 이한울</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ScrollProgress />

        <Container>
          <LeftBar changeMode={changeMode} />
          <RightContent />
        </Container>
      </GlobalWrap>
    </MDContext.Provider>
  )
}

const GlobalWrap = styled.div`
  //max-width: 100vw;
  transition: background-color 0.3s;
  background: ${({ theme }) => theme.palette.backgroundColor};
  color: ${({ theme }) => theme.palette.text2};
`

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex: 1;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.mobile} {
    gap: 0;
  }
  //padding: 0 1rem;
`

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  const posts = files
    .filter((filename) => filename.includes('.md'))
    .map((filename) => {
      // Create slug
      const slug = filename.replace('.md', '')

      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8',
      )

      const { data: frontMatter, content } = matter(markdownWithMeta)
      return {
        slug,
        frontMatter,
        content,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime(),
    )

  return {
    props: {
      posts,
    },
  }
}

export default Home
