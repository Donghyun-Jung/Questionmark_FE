import Link from 'next/link';
import * as Styled from './style';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Inner>
        <span>Built by Team DUEL. The source code is available on </span>
        <Link href="https://github.com/CSID-DGU/2024-1-OSSProj-Questionmark-07">Github</Link>
      </Styled.Inner>
    </Styled.Footer>
  );
};

export default Footer;
