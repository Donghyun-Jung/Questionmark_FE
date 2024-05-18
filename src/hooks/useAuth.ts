import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { accessTokenAtom } from '@/components/auth/states/accessTokenAtoms';

import DUEL_LINKS from '@/constants/links';
import { removeCookie } from '@/utils/cookie';


export const useAuth = () => {
  const router = useRouter();
  const accessToken = useRecoilValue(accessTokenAtom);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!accessToken);
  }, [accessToken]);

  return {
    logout() {
      removeCookie('accessToken');
      router.push(DUEL_LINKS.intro());
    },
    isLoggedIn,
  };
};

export default useAuth;