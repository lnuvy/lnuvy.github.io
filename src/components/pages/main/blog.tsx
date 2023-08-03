import styled from '@emotion/styled';
import Link from 'next/link';

interface Props {}

const Blog = ({}: Props) => {
  return (
    <Wrap id="Blog">
      <br />
      <h2>🖥️ Blog.</h2>
      <br />
      <Para>
        노션페이지를 빌드시켜주는{' '}
        <Link href="https://super.so/" target="_blank">
          super.so
        </Link>
        를 통해 개인블로그를 작성중입니다.
      </Para>
      <LinkP>
        <Link href="https://lnuvy.super.site/blog/" target="_blank">
          블로그 구경하기
        </Link>
      </LinkP>
    </Wrap>
  );
};

export default Blog;

const Wrap = styled.div``;

const Para = styled.p`
  margin-top: 0.2rem;
  /* margin-left: 0.5rem; */
  font-weight: 400;

  &::marker {
    /* color: ; */
  }
`;

const LinkP = styled.p`
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.palette.text1};
  }
`;
