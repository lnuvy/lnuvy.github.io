import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
import ScrollProgress from '@components/ScrollProgressBar'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { createContext } from 'react'
import { MDFile } from '@typing/Frontend'
import Layout from '@components/layout'

export const MDContext = createContext({})

interface IndexProps extends GetStaticProps {
  changeMode: () => void
  posts: MDFile[]
}

// getStaticProps 사용했을때의 타입 잘 모르겠음
const Home: NextPage = (props: IndexProps | any) => {
  const { posts } = props
  const contextValue = { posts }

  return (
    <MDContext.Provider value={contextValue}>
      <GlobalWrap>
        <ScrollProgress />
        <Layout>
          <Layout.Left />
          <Layout.Right />
        </Layout>
      </GlobalWrap>
    </MDContext.Provider>
  )
}

const GlobalWrap = styled.div`
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
`

export const getStaticProps = async () => {
  const roots = fs.readdirSync(path.join('posts'))

  const posts = roots.map((folder) => {
    const files = fs.readdirSync(path.join('posts', folder))

    return {
      [folder]: files
        .filter((filename) => filename.includes('.md'))
        .map((filename) => {
          const title = filename.replace('.md', '')

          const markdownWithMeta = fs.readFileSync(
            path.join('posts', folder, filename),
            'utf-8',
          )

          const { data: frontMatter, content } = matter(markdownWithMeta)
          return {
            title,
            frontMatter,
            content,
          }
        }),
    }
  })

  return {
    props: { posts },
  }
}

export default Home
