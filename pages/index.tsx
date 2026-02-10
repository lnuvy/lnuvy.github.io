import type { GetStaticProps, NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import { createContext } from 'react'
import matter from 'gray-matter'
import Layout from '@components/layout'
import ScrollProgress from '@components/scroll-progress-bar'
import { MDFile } from '@typing/front'

export const MDContext = createContext({})

interface IndexProps extends GetStaticProps {
  changeMode: () => void
  posts: MDFile[]
}

const Home: NextPage = (props: IndexProps | any) => {
  const { posts } = props
  const contextValue = { posts }

  return (
    <MDContext.Provider value={contextValue}>
      <div className="min-h-screen bg-background-default text-text-2">
        <ScrollProgress />
        <div className="w-full">
          <Layout>
            <Layout.Left />
            <Layout.Right />
          </Layout>
        </div>
      </div>
    </MDContext.Provider>
  )
}

export const getStaticProps = async () => {
  const roots = fs.readdirSync(path.join('posts'))

  const posts = roots.map((folder) => {
    const files = fs.readdirSync(path.join('posts', folder))

    return {
      [folder]: files
        .filter((filename) => filename.includes('.md'))
        .map((filename) => {
          const title = filename.replace('.md', '')

          const markdownWithMeta = fs.readFileSync(path.join('posts', folder, filename), 'utf-8')

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
