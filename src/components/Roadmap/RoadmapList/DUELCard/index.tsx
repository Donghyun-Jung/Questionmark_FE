import Image from 'next/image';
import { useRouter } from 'next/router';
import type { DUEL } from '@/api/type';
import * as Style from '@/components/Roadmap/RoadmapList/DUELCard/style';
import Logo from '@/components/common/Logo';
import DUEL_LINK from '@/constants/links';

interface DUELCardProps {
  roadmap: DUEL;
}

const DUELCard = (props: DUELCardProps) => {
  const { roadmap } = props;
  const router = useRouter();

  return (
    <Style.Root
      onClick={() => {
        router.push(DUEL_LINK.roadmapDetail(roadmap.id));
      }}>
      <section>
        <Logo type="logo" imageSize={25} />
        <Image
          src={'https://ppss.kr/wp-content/uploads/2022/10/1-6.jpg'}
          width={500}
          height={250}
          style={{ width: '100%', height: 'auto' }}
          alt={'roadmapImg'}
        />
        <h5>{roadmap.name}</h5>
      </section>

      <p>{roadmap.stepNum}개 STEP</p>
    </Style.Root>
  );
};

export default DUELCard;
