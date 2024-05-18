import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import VerifyForm from '@/components/auth/verify/VerifyForm';
import DUELHead from '@/components/common/NextHead/DUELHead';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

export const PasswordVerifyPage = () => {
  return (
    <AuthPageContainer>
      <DUELHead title="DUEL | 이메일 인증" />
      <VerifyForm location="password" />
    </AuthPageContainer>
  );
};

setLayout(PasswordVerifyPage, FullHeightLayout);

export default PasswordVerifyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cookies } = context.req;
  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  if (!isUserLogin) {
    return { props: {} };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};