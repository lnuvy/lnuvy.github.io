import Link from 'next/link';
import { UrlObject } from 'url';

interface Props {
  children: JSX.Element;
  href?: string | UrlObject;
}

const OptionalLink = ({ children, href }: Props) => {
  if (!href) {
    return <>{children}</>;
  }

  return (
    <Link href={href}>
      <a target="_blank">{children}</a>
    </Link>
  );
};

export default OptionalLink;
