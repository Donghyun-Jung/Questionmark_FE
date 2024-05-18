import { useRouter } from 'next/router';
import DUEL_LINKS from '@/constants/links';
import { removeCookie } from '@/utils/cookie';

export const useAuth = () => {
  const router = useRouter();

  return {
    logout() {
      removeCookie('accessToken');
      router.push(DUEL_LINKS.home());
    },
  };
};

export default useAuth;
