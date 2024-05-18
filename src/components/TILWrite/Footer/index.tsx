import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetTil, usePatchTil } from '@/api/hooks/til';
import { useSubmitTil } from '@/api/hooks/til';
import SubmitModal from '@/components/TILWrite/SubmitModal';
import Button from '@/components/common/Button';
import CustomSuspense from '@/components/common/CustomSuspense';
import Skeleton from '@/components/common/Skeleton';
import { duelLinks } from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

interface FooterProps {
  TILContent: string;
}

const Footer = (props: FooterProps) => {
  const { TILContent } = props;

  const router = useRouter();
  const { isOpen, handleOpen, handleClose } = useModalState();
  const { patchTil } = usePatchTil();
  const { submitTil } = useSubmitTil();
  const { tilDetail, isLoading } = useGetTil({
    roadmapId: Number(router.query.roadmapId),
    stepId: Number(router.query.stepId),
    tilId: Number(router.query.tilId),
  });

  const handleSaveTIL = () => {
    if (!tilDetail) return;

    patchTil({
      roadmapId: Number(router.query.roadmapId),
      stepId: Number(router.query.stepId),
      tilId: Number(router.query.tilId),
      content: TILContent,
      title: tilDetail?.step.title,
    });
  };

  const handleSubmitTIL = () => {
    submitTil({
      roadmapId: Number(router.query.roadmapId),
      stepId: Number(router.query.stepId),
      tilId: Number(router.query.tilId),
      title: 'title',
      content: 'content',
    });
    handleClose();
  };

  return (
    <Styled.Root>
      <Styled.ExitContainer onClick={() => router.push(duelLinks.home())}>
        <Image src={'/assets/icons/ic_arrowLeft.svg'} alt="Logo" width={20} height={20} />
        <Styled.Title>나가기</Styled.Title>
      </Styled.ExitContainer>

      <Styled.Container>
        <CustomSuspense fallback={<SkeletonButton />} isLoading={isLoading}>
          {!tilDetail?.isPersonal && (
            <>
              {tilDetail?.isCompleted ? (
                <Button
                  css={Styled.ButtonStyles}
                  onClick={() =>
                    router.push(
                      duelLinks.peopleTil({
                        roadmapId: Number(router.query.roadmapId) as number,
                        stepId: Number(router.query.stepId) as number,
                      }),
                    )
                  }>
                  다른 사람 TIL 보기
                </Button>
              ) : (
                <Button variant="primary" css={Styled.ButtonStyles} onClick={handleOpen}>
                  제출
                </Button>
              )}
            </>
          )}
        </CustomSuspense>
        <Button css={Styled.ButtonStyles} onClick={handleSaveTIL}>
          저장
        </Button>
      </Styled.Container>
      <SubmitModal isOpen={isOpen} handleClose={handleClose} handleSubmitTIL={handleSubmitTIL} />
    </Styled.Root>
  );
};

export default Footer;

const SkeletonButton = () => {
  return <Skeleton css={Styled.SkeletonStyles} />;
};