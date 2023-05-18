import Layout from '@components/layout';
import ScrollProgress from '@components/scroll-progress-bar';
import styled from '@emotion/styled';
import { MDFile } from '@typing/front';
import fs from 'fs';
import matter from 'gray-matter';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import { createContext } from 'react';

export const MDContext = createContext({});

interface IndexProps extends GetStaticProps {
  changeMode: () => void;
  posts: MDFile[];
}

// getStaticProps 사용했을때의 타입 잘 모르겠음
const Home: NextPage = (props: IndexProps | any) => {
  const { posts } = props;
  const contextValue = { posts };

  return (
    <MDContext.Provider value={contextValue}>
      <Frame>
        <ScrollProgress />
        <Layout>
          <Layout.Left />
          <Layout.Right />
        </Layout>
      </Frame>
    </MDContext.Provider>
  );
};

const Frame = styled.div`
  /* transition: all 0.2s ease-in-out; */
  background: ${({ theme }) => theme.palette.backgroundColor};
  color: ${({ theme }) => theme.palette.text2};
`;

export const getStaticProps = async () => {
  const roots = fs.readdirSync(path.join('posts'));

  const posts = roots.map((folder) => {
    const files = fs.readdirSync(path.join('posts', folder));

    return {
      [folder]: files
        .filter((filename) => filename.includes('.md'))
        .map((filename) => {
          const title = filename.replace('.md', '');

          const markdownWithMeta = fs.readFileSync(path.join('posts', folder, filename), 'utf-8');

          const { data: frontMatter, content } = matter(markdownWithMeta);
          return {
            title,
            frontMatter,
            content,
          };
        }),
    };
  });

  return {
    props: { posts },
  };
};

export default Home;
