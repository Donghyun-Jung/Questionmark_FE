import { useRouter } from 'next/router';
import * as Styled from '@/components/gnb/common/GNBNav/style';
import DUEL_LINKS from '@/constants/links';

const GNBNav = () => {
  const router = useRouter();
  const activePathMatcher = (path: string) => `/${router.pathname.split('/')[1]}` === path;

  return (
    <Styled.NavArea>
      <Styled.NavItem href={DUEL_LINKS.home()} active={+activePathMatcher(DUEL_LINKS.home())}>
        홈
      </Styled.NavItem>
      <Styled.NavItem href={DUEL_LINKS.roadmap()} active={+activePathMatcher('/roadmap')}>
        로드맵
      </Styled.NavItem>
    </Styled.NavArea>
  );
};

export default GNBNav;
