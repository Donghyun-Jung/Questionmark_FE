import { useRouter } from 'next/router';
import * as Styled from '@/components/roadmap/manage/common/DesktopManageBar/style';
import DUEL_LINKS from '@/constants/links';

const SideBar = () => {
  const router = useRouter();

  const activePathMatcher = (path: string) => router.pathname.split('/')[4] === path.split('/')[4];

  return (
    <Styled.Root>
      <Styled.NavItem
        href={DUEL_LINKS.manageInfo(Number(router.query.roadmapId))}
        active={+activePathMatcher(DUEL_LINKS.manageInfo(Number(router.query.roadmapId)))}>
        로드맵 정보
      </Styled.NavItem>
      <Styled.NavItem
        href={DUEL_LINKS.manageStep(Number(router.query.roadmapId))}
        active={+activePathMatcher(DUEL_LINKS.manageStep(Number(router.query.roadmapId)))}>
        STEP 관리
      </Styled.NavItem>
      <Styled.NavItem
        href={DUEL_LINKS.manageMember(Number(router.query.roadmapId))}
        active={+activePathMatcher(DUEL_LINKS.manageMember(Number(router.query.roadmapId)))}>
        구성원 관리
      </Styled.NavItem>
      <Styled.NavItem
        href={DUEL_LINKS.manageTIL(Number(router.query.roadmapId))}
        active={+activePathMatcher(DUEL_LINKS.manageTIL(Number(router.query.roadmapId)))}>
        TIL 모아보기
      </Styled.NavItem>
      <Styled.NavItem
        href={DUEL_LINKS.manageApply(Number(router.query.roadmapId))}
        active={+activePathMatcher(DUEL_LINKS.manageApply(Number(router.query.roadmapId)))}>
        신청 관리
      </Styled.NavItem>
    </Styled.Root>
  );
};

export default SideBar;
