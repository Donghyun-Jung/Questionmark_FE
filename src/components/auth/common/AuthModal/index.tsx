import { useRouter } from 'next/router';
import * as Styled from '@/components/auth/common/AuthModal/style';
import Modal, { type ModalProps } from '@/components/common/Modal';
import DUEL_LINKS from '@/constants/links';

interface AuthModal extends ModalProps {
  content: string;
}

const AuthModal = (props: ModalProps) => {
  const { isOpen, onClose, content } = props;
  const router = useRouter();

  return (
    <Modal
      width={25}
      isOpen={isOpen}
      onClose={() => {
        onClose();
        router.replace(DUEL_LINKS.login());
      }}>
      <Styled.Title>{content}</Styled.Title>
      <Styled.LoginButton href={DUEL_LINKS.login()} replace={true}>
        로그인 페이지로 이동
      </Styled.LoginButton>
    </Modal>
  );
};

export default AuthModal;
