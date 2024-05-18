import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { duelLinks } from '@/constants/links';
import type { Layout } from '@/utils/layout';
import { accessTokenAtom } from '../states/accessTokenAtoms';

function withAuth(WrappedComponent: Layout) {
  return function (props) {
    const router = useRouter();
    const accessToken = useRecoilValue(accessTokenAtom);

    useEffect(() => {
      if (accessToken === null) {
        router.replace(duelLinks.login());
      }
    });

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
