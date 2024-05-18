import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import DUEL_LINKS from '@/constants/links';
import * as Styled from './style';

const FeatureInfoSection = () => {
  const router = useRouter();

  return (
    <Styled.Root>
      <Card css={Styled.LeftCardStyles}>
        <Styled.Container>
          <div>공부 방향에 대한 고민이 있는 분들께 드리는 DUEL의 로드맵!</div>
          <Button css={Styled.ButtonStyles} onClick={() => router.push(DUEL_LINKS.roadmap())}>
            바로 가기
          </Button>
        </Styled.Container>
      </Card>

      <Card css={Styled.RightCardStyles}>
        <Styled.Container>
          <div>DUEL 에서 공부한 내용을 공개하세요. 깃허브 자동 업로드 기능!</div>
          <Link href="https://www.naver.com" target="_blank">
            <Button css={Styled.ButtonStyles}>바로 가기</Button>
          </Link>
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default FeatureInfoSection;
